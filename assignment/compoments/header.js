const Header = {
    render() {
        return /* html */`
            <div class="bg-[#333366] py-4">
                <a href="">
                <img src="https://picsum.photos/250/100" alt="" class="m-auto">
                </a>
            </div>
            <div class="bg-[#cc6600] flex justify-between items-center ">
            <ul class="flex m-[10px] pl-[30px] ">
                <li><a class="p-[15px] text-[#fff] text-lg underline decoration-solid hover:bg-[#F8F9FA] hover:p-[12px] hover:text-[#000] " href="/">Trang chủ</a></li>
                <li><a class="p-[15px] text-[#fff] text-lg hover:bg-[#F8F9FA] hover:p-[12px] hover:text-[#000] " href="/about">Tuyển sinh</a></li>
                <li><a class="p-[15px] text-[#fff] text-lg hover:bg-[#F8F9FA] hover:p-[12px] hover:text-[#000]" href="/news">Chương trình đào tạo</a></li>
                <li><a class="p-[15px] text-[#fff] text-lg hover:bg-[#F8F9FA] hover:p-[12px] hover:text-[#000]" href="">Góc sinh viên</a></li>
                <li><a class="p-[15px] text-[#fff] text-lg hover:bg-[#F8F9FA] hover:p-[12px] hover:text-[#000]" href="">Tuyển dụng</a></li>
            </ul>
            <form action="#" method="POST">
                <input type="text" class="mr-[10px] p-[3px] w-[190px]">
                <input type="submit" value="Tìm kiếm" class="bg-[#333366] text-base mr-[7px] p-[3px] w-[70px] text-[#fff]">
            </form>
        </div>
        `;
    },
};
export default Header;