<template>
    <main class="login-page">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-10 col-md-8 col-lg-6 col-xl-4 ">
                    <BCard title="Login">
                        <BForm @submit.prevent=fetchLogin() class="d-flex flex-column gap-2">

                            <!-- Email Input -->
                            <BFormFloatingLabel label="Email address" label-for="floatingEmail" class="my-2">
                                <BFormInput id="floatingEmail" type="email" placeholder="Email address"
                                    v-model="form.email" required />
                            </BFormFloatingLabel>

                            <!-- Password Input -->
                            <BFormFloatingLabel label="Password" label-for="floatingPassword" class="my-2">
                                <BFormInput id="floatingPassword" type="password" placeholder="Password"
                                    v-model="form.password" required />
                            </BFormFloatingLabel>

                            <!-- Checkbox Remember me  -->
                            <BFormCheckbox
                                id="checkbox-rememberMe"
                                v-model="status"
                                name="checkbox-rememberMe"
                            >
                                Remember me
                            </BFormCheckbox>
                            
                            <!-- Submit btn -->
                            <BButton type="submit" class="btn-custom mb-3">Login</BButton>

                            <!-- Link to register  -->
                            <BCardText class="text-center">
                                Don't have an account? 
                                <RouterLink :to="{ name: 'register' }">
                                    Register here
                                </RouterLink>
                            </BCardText>
                        </BForm>
                    </BCard>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

import { login } from '../../api/auth';
import { storeAuth } from '../../store/storeAuth';

export default {
    data() {
        return {
            form: {
                email: "",
                password: "",
                rememberMe: false
            },
            status: false
        }
    },
    methods: {
        async fetchLogin() {
            try {
                
                const credentials = {
                    email: this.form.email,
                    password: this.form.password,
                    rememberMe: this.form.rememberMe
                };

                const loginResponse = await login(credentials);

                if (loginResponse.status === 200) {
                    alert('Login successful!');

                    storeAuth.login({
                        user: loginResponse.data.user,  
                        token: loginResponse.data.token
                    });

                    this.$router.push({ name: 'dashboard' })
                }

            } catch (loginError) {
                console.error('Login Error:', loginError);
                alert('An error occurred during login. Please try again.');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

.login-page {
    @include background-base;
    @include flex-column-center;

    // color: white;
    height: 100vh;
    padding: 100px 0px;

    .btn-custom {
        font-size: 20px;
        min-width: 100px;
        align-self: center;
        @include btn-custom;
    }
}
</style>