import data from "../data";

const NewEdit = {
    render(id) {
        const mains = data.find((main) => main.id === id);
        return /* html */`
        <nav class="bg-blue-500 h-16 mt-[0px] max-w-screen-xl ">
        <div class="max-w-7xl mx-auto px-2 pt-1.5">
        <div class="relative flex items-center justify-between">
            <button class="px-4 py-2 text-gray-700 text-2xl rounded-lg hover:bg-blue-500">
            <a href="/">
                    <i class="fas fa-bars"></i>  
            </a>
            </button>

            <form method="GET" class="w-full invisible sm:visible">
            <div class="relative text-gray-500 ml-6 px-3 pt-1">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2 pt-1">
                <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
                </span>
                <input type="search" class="py-2 text-md text-gray-900 w-full
                rounded-md pl-10 bg-transparent placeholder-gray-800 focus:outline-none
                focus:bg-white focus:text-gray-800" placeholder="Search...">
            </div>
            </form>

            <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            </button>

            <div class="ml-3 relative">
                <div>
                <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </button>
                </div>

                <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
                <div class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">
                    <i class="fas fa-user mr-2"></i>Your Profile</a>

                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">
                    <i class="fas fa-cog mr-2"></i>Settings</a>

                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">
                    <i class="fas fa-sign-out-alt mr-2"></i>Sign out</a>
                </div>
            </div>

        </div>
        </div>

    </nav>
        <main class="flex  ">
        <aside class="bg-red-500 relative w-72">
        <div class="p-6 ml-[10px]">
            <a href="" class="text-white text-2xl font-semibold ">
            <i class="fas fa-user-cog mr-3"></i>Admin
            </a>
        </div>
        <nav class="text-white text-base font-semibold pt-3 ">
            <a href="/admin" class="flex items-center active-nav-link text-lg text-white py-4 pl-[50px] p-[10px] nav-item hover:bg-blue-500">
            <i class="fas fa-tachometer-alt mr-3"></i>Dashboard
            </a>
        </nav>

        <nav class="text-white text-base font-semibold pt-2 ">
            <a href="/news/add" class="flex items-center active-nav-link text-lg text-white py-4 pl-[50px] p-[10px] nav-item hover:bg-blue-500">
            <i class="far fa-newspaper mr-3"></i>News Table
            </a>
        </nav>

        <nav class="text-white text-base font-semibold pt-3 ">
            <a href="" class="flex items-center active-nav-link text-lg text-white py-4 pl-[50px] p-[10px] nav-item hover:bg-blue-500">
            <i class="fas fa-cog mr-3"></i>Settings
            </a>
        </nav>
    </aside>

            <div class="">
            <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
                <div  class="px-4 sm:px-0">
                <h3 class="text-3xl ml-[30px] mt-[20px] font-bold leading-6 text-gray-900">Profile</h3>
                <p class="mt-1 text-sm text-gray-600 ml-[30px] mt-[10px]">
                    This information will be displayed publicly so be careful what you share.
                </p>
                </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-3 sm:col-span-2">
                        <label for="company-website" class="block text-xl font-medium text-gray-700 p-[10px]">
                            Title
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <input type="text" name="company-website" id="company-website" class="shadow-sm p-[10px] focus:ring-indigo-500 focus:border-indigo-500 mt-1 block sm:text-sm border border-gray-300 rounded-md" placeholder="${mains.title}">
                        </div>
                        </div>
                    </div>
        
                    <div>
                        <label for="about" class="block text-xl font-medium text-gray-700">
                        Desc
                        </label>
                        <div class="mt-1">
                        <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md">${mains.desc}</textarea>
                        </div>
                    </div>
        
                    <div>
                        <label class="block text-xl font-medium text-gray-700">
                        Photo
                        </label>
                        <div class="mt-1 flex items-center">
                        <img src="${mains.img}">
                        </div>
                    </div>
        
                    <div>
                        <label class="block text-xl font-medium text-gray-700">
                        Cover photo
                        </label>
                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div class="space-y-1 text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div class="flex text-sm text-gray-600">
                            <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" class="sr-only">
                            </label>
                            <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                    </button>
                    </div>
                </div>
                </form>
            </div>
            </div>
            </div>
        </main>
        

        `;
    },

};
export default NewEdit;