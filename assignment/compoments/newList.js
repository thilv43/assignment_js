import data from "../data";

const NewsList = {
    print() {
        return /* html */ `
                <h2 class="my-7 text-3xl font-bold uppercase ml-[20px]  text-[#333366]">Tin tức học tập</h2>
                <div class="grid grid-cols-3 gap-[20px]">
                    ${data.map((post) => `
                        <div class="border-[1px] border-[#c2c2c2]">
                            <div class="ml-[35px] my-[15px]">
                                <a href="/news/${post.id}">
                                    <img src="${post.img}" alt="" />
                                </a>
                            </div>
                            <div class="ml-[35px] my-[20px]">
                                <h3 class="inline-block mr-[5px] mb-[10px] text-[#ab3f00] font-bold text-xl"><a href="/news/${post.id}">${post.title}</a></h3>                    
                                <p class="text-[#000] text-base inline-block mr-[10px]">${post.desc}</p>
                            </div>
                        </div>
                    `).join("")}
        
        `;
    },
};
export default NewsList;