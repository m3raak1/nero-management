<script setup>
</script>

<template>
    <main class="w-screen h-screen flex">
        <section class="w-1/2 h-full p-20 flex flex-col items-center justify-around">
            <h1 class="text-8xl font-light">MERA</h1>
            <div class="flex flex-col bg-indigoNavbarBg border border-borderColor rounded-xl p-10 relative">
                <img class="absolute bottom-[90%] left-1/2 -translate-x-1/2 w-1/4" src="@/assets/img/userpic.png" alt="User Picture" />
                <input type="text" placeholder="Usuário">
                <input type="password" placeholder="Password">
                <button class="text-2xl mt-2">Entrar</button>
            </div>
        </section>
        <section class="w-1/2 h-full overflow-hidden relative">
            <img src="@/assets/img/bg-login.png" alt="" class="w-screen h-screen blur-sm">
            <div class="absolute top-1/2 translate-t-1/2 left-1/2 -translate-x-1/2 w-1/2 flex flex-col items-center">
                <h1 class=" text-3xl bg-clip-text text-transparent bg-silver-gradient">Bem Vindo ao</h1>
                <h2>Mera</h2>
            </div>
        </section>
    </main>
</template>

<style>
    input {
        @apply py-3 px-4 text-2xl bg-indigoBackground border border-borderColor rounded-3xl my-3
    }
</style>