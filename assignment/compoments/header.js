const Header = {
    render() {
        return /* html */`
            <div class="bg-[#333366] py-4">
                <a href="">
                <img src="https://picsum.photos/250/100" alt="" class="m-auto">
                </a>
            </div>
            <div class="bg-[#cc6600] flex justify-between items-center ">
                <ul class="flex m-[10px] pl-[20px] ">
                    <li><a class="p-[15px] text-[#fff] text-lg underline decoration-solid hover:bg-[#F8F9FA] hover:p-[12px] hover:text-[#000] " href="/">Home</a></li>
                    <li><a class="p-[15px] text-[#fff] text-lg hover:bg-[#F8F9FA] hover:p-[12px] hover:text-[#000] " href="/about">About</a></li>
                    <li><a class="p-[15px] text-[#fff] text-lg hover:bg-[#F8F9FA] hover:p-[12px] hover:text-[#000]" href="/news">News</a></li>
                    <li><a class="p-[15px] text-[#fff] text-lg hover:bg-[#F8F9FA] hover:p-[12px] hover:text-[#000]" href="/contact">Contact</a></li>
                    <li><a class="p-[15px] text-[#fff] text-lg hover:bg-[#F8F9FA] hover:p-[12px] hover:text-[#000]" href="/admin">Admin</a></li>
                </ul>
                <form action="#" method="POST">
                    <input type="text" class="mr-[10px] p-[3px] w-[190px] rounded-md">
                    <input type="submit" value="Tìm kiếm" class="bg-[#333366] text-base mr-[30px] rounded-md p-[3px] w-[70px] text-[#fff]">
                </form>
                <div class="">
                    <a href="/signin">
                        <button class="bg-[#0253a4] text-base mr-[7px] p-[3px] w-[70px] text-[#fff] rounded-md hover:bg-[#012a4a]">Sign in</button>
                    </a>
                    <a href="/login">
                        <button class="bg-[#e63946] text-base mr-[10px] p-[3px] w-[70px] text-[#fff] rounded-md hover:bg-[#d90429]">Login</button>
                    </a>
                </div>
            
            </div>
        `;
    },
};
export default Header;