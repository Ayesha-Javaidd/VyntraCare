'use client';

import { useEffect, useState, createContext, useContext } from 'react';
import { supabase } from '@/services/supabase-client';
import { User, Session } from '@supabase/supabase-js';

type UserRole = 'admin' | 'facility_manager' | 'customer' | null;

interface UserContextType {
    user: User | null;
    session: Session | null;
    profile: any | null;
    role: UserRole;
    isLoading: boolean;
    signOut: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [profile, setProfile] = useState<any | null>(null);
    const [role, setRole] = useState<UserRole>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check active sessions and sets the user
        const setData = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();
            if (error) throw error;

            setSession(session);
            setUser(session?.user ?? null);

            if (session?.user) {
                await fetchProfile(session.user.id);
            }

            setIsLoading(false);
        };

        const fetchProfile = async (userId: string) => {
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', userId)
                .single();

            if (!error && data) {
                setProfile(data);
                setRole(data.role as UserRole);
            }
        };

        setData();

        // Listen for changes on auth state (logged in, signed out, etc.)
        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
            setSession(session);
            setUser(session?.user ?? null);

            if (session?.user) {
                await fetchProfile(session.user.id);
            } else {
                setProfile(null);
                setRole(null);
            }

            setIsLoading(false);
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    const signOut = async () => {
        await supabase.auth.signOut();
    };

    const value = {
        user,
        session,
        profile,
        role,
        isLoading,
        signOut
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
