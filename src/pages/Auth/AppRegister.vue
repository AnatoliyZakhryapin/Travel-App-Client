<template>
    <main class="register-page">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-10 col-md-8 col-lg-6 col-xl-4 ">
                    <BCard title="Create new account">
                        <BForm @submit.prevent=fetchRegister() class="d-flex flex-column gap-2">

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

                            <!-- Confirm Password Input -->
                            <BFormFloatingLabel label="Confirm password" label-for="floatingConfirmPassword"
                                class="my-2">
                                <BFormInput id="floatingConfirmPassword" type="password" placeholder="Confirm password"
                                    v-model="form.confirmPassword" required />
                            </BFormFloatingLabel>
                                    
                            <!-- Submit btn -->
                            <BButton type="submit" class="btn-custom mb-3">Register</BButton>

                            <!-- Link to login -->
                            <BCardText class="text-center">
                                Have an Account?
                                <RouterLink :to="{ name: 'login' }">
                                    Login Here
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

import { register, login} from '../../api/auth';
import { storeAuth } from '../../store/storeAuth';

export default {
    data() {
        return {
            form: {
                email: "",
                password: "",
                confirmPassword: ""
            }
        }
    },
    methods: {
        async fetchRegister() {
            try {
                
                const userData = {
                    email: this.form.email,
                    password: this.form.password,
                    confirmPassword: this.form.confirmPassword
                };

                const registerResponse = await register(userData);

                if (registerResponse.status === 200 || registerResponse.status === 201) {
                    alert('Registration successful!');

                    const credentials = {
                        email: userData.email,
                        password: userData.password,
                        rememberMe: true
                    };

                    try {
                        const loginResponse = await login(credentials);

                        if (loginResponse.status === 200) {
                            alert('Login successful!');

                            storeAuth.login({
                                user: loginResponse.data.user,  
                                token: loginResponse.data.token
                            });

                            this.$router.push({ name: 'dashboard' })

                        } else {
                            alert('Login failed. Please try logging in manually.');

                            this.$router.push({ name: 'login' })
                        }
                    } catch (loginError) {
                        console.error('Login Error:', loginError);
                        alert('An error occurred during login. Please try again.');
                    }

                } else {
                    alert('Registration failed. Please try again.');
                }
            } catch (registerError) {
                console.error('Registration Error:', registerError);
                alert('An error occurred during registration. Please try again.');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

.register-page {
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