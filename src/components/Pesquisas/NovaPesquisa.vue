<template>
    <div class="flex-1 h-screen overflow-y-scroll scroll-m-1">
        <section class="px-12 pt-12 text-4xl font-sans">
            <span class="text-transparent bg-silver-gradient bg-clip-text">Nova Pesquisa</span>
        </section>
        <section class="py-8 px-12 flex flex-col items-end">
            <div class="border rounded-3xl bg-indigoNavbarBg border-indigoNavbarSt w-full">
                <div class=" p-7">
                    <div class="w-full flex justify-between items-center gap-10">
                        <!-- Titulo da Pesquisa-->
                        <input class="text-xl py-2 px-2 border-b border-borderColor" type="text" placeholder="Inserir Titulo">
                        <div class="flex gap-10">
                            <!-- Equipe -->
                            <div class="flex items-center gap-2">
                                <label>Equipe</label>
                                <select class="px-4 py-1 bg-metal-gradient rounded-3xl">
                                    <option value="">Alfa</option>
                                </select>
                            </div>
                            <!-- Data -->
                            <div class="flex items-center gap-2">
                                <label>Data de Inicio</label>
                                <input class="bg-ruby-gradient rounded-2xl px-4 py-1" type="date">
                            </div>
                        </div>
                    </div>
                    <!-- Responsavel-->
                    <div class="my-6">
                        <input class="text-lg py-2 px-2 border-b border-borderColor" list="users" placeholder="Responsavel">
                        <datalist id="users" placeholder="Responsavel">
                            <option value="Anthony Passos"></option>
                        </datalist>
                    </div>
                    <!-- Objetivo -->
                    <textarea class="w-full bg-indigoBackground rounded-2xl p-4" rows="5" placeholder="Objetivo da Pesquisa"></textarea>
                    <!-- Titulo Resumo -->
                    <input class="text-xl py-2 px-2 my-6 w-2/5 border-b border-borderColor" type="text" placeholder="Inserir Titulo do Resumo">
                    <textarea class="w-full bg-indigoBackground rounded-2xl p-4" rows="5" placeholder="Resumo da Pesquisa"></textarea>
                </div>
            </div>
            <button class=" bg-indigoNavbarBg border border-borderColor rounded-2xl py-2 px-4 font-semibold my-4">
                <span class="text-transparent  bg-emerald-gradient bg-clip-text">Salvar</span>
            </button>
        </section>
    </div>
</template>

<style scoped>
    input, select{
        @apply bg-transparent outline-none
    }
</style>