import data from "../data";
import Header from "../compoments/header";
import Banner from "../compoments/banner";
import Footer from "../compoments/footer";

const DetailNewsPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return /* html */ `
        <div class="max-w-screen-lg m-auto">
            <div>
                ${Header.render()}
            </div>
            
            <div>
                ${Banner.render()}
            </div>
            <div>
                <div class="border-[2px] border-[#c2c2c2 w-[35%] my-[10px]">
                    <div class="ml-[35px] my-[15px]">
                    <h2 class="inline-block mr-[10px] mb-[30px] text-[#ab3f00] font-bold text-3xl">${result.title}</h2>
                        <a href="">
                            <img  src="${result.img}" alt="">
                        </a>
                    </div>
                    <div class="ml-[35px] my-[20px]">
                        <span class="text-[#000] text-base inline-block mr-[10px]">${result.desc}t</span>
                    </div>
                </div>
            </div>
            <div>
                ${Footer.render()}
            </div>
        </div>
        `;
    },
};
export default DetailNewsPage;