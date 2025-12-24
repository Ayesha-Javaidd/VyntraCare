import { createClient } from '@supabase/supabase-js';

// INSTRUCTIONS:
// 1. Install ts-node: npm install -g ts-node
// 2. Set environment variables: 
//    $env:NEXT_PUBLIC_SUPABASE_URL="your_url"
//    $env:SUPABASE_SERVICE_ROLE_KEY="your_service_role_key"
// 3. Run: ts-node scripts/create-admin.ts

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Error: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createAdminUser() {
    const email = 'admin@vyntracare.com';
    const password = 'securepassword123';
    const fullName = 'System Admin';

    console.log(`Creating Admin User: ${email}...`);

    const { data: { user }, error: authError } = await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { full_name: fullName, role: 'admin' }
    });

    if (authError) {
        console.error('Error creating auth user:', authError.message);
        return;
    }

    if (!user) {
        console.error('User not created.');
        return;
    }

    console.log('Auth user created. ID:', user.id);

    // Profile should be created by trigger, but we update role explicitly to be safe
    const { error: profileError } = await supabase
        .from('profiles')
        .update({ role: 'admin' })
        .eq('id', user.id);

    if (profileError) {
        console.error('Error updating profile role:', profileError.message);
    } else {
        console.log('Profile role set to ADMIN.');
    }
}

async function createFacilityManager() {
    const email = 'manager@carefacility.com';
    const password = 'securepassword123';
    const fullName = 'Facility Manager';

    console.log(`\nCreating Facility Manager: ${email}...`);

    const { data: { user }, error: authError } = await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { full_name: fullName, role: 'facility_manager' }
    });

    if (authError) {
        console.error('Error creating auth user:', authError.message);
        return;
    }

    if (!user) {
        console.error('User not created.');
        return;
    }

    console.log('Auth user created. ID:', user.id);

    const { error: profileError } = await supabase
        .from('profiles')
        .update({ role: 'facility_manager' })
        .eq('id', user.id);

    if (profileError) {
        console.error('Error updating profile role:', profileError.message);
    } else {
        console.log('Profile role set to FACILITY_MANAGER.');
    }

    // Create a facility for this manager
    const { error: facilityError } = await supabase
        .from('facilities')
        .insert({
            name: 'Grand Oak Nursing Home',
            manager_id: user.id,
            address: '123 Oak St, Springfield',
            status: 'active'
        });

    if (facilityError) {
        console.error('Error creating facility:', facilityError.message);
    } else {
        console.log('Facility "Grand Oak Nursing Home" created and linked to manager.');
    }
}

async function main() {
    await createAdminUser();
    await createFacilityManager();
}

main();
