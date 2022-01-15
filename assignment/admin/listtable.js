import data from "../data";

const ListTable = {
    render() {
        return /* html */ `
        <div class="flex flex-col overflow-hidden">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200 ">
                <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                    </th>
                    <th scope="col" class="pl-[30px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Edit
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                    <a href="admin/news/add" class="border-[1px] px-[15px] py-[5px] bg-blue-500 rounded-md">ADD</a>
                    </th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 ">
                <tr>
                    <td class="px-6">
                    ${data.map((conten) => `
                    <tr>
                        <td class="px-6 py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                            <img class="h-10 w-10 rounded-full" src="${conten.img}" alt="">
                            </div>
                            <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                                ${conten.title}
                            </div>
                            <div class="text-sm text-gray-500">
                                ${conten.createdAt}
                            </div>
                            </div>
                        </div>
                        </td>
                        <td class="px-6 py-4 ">
                        <span class="block text-sm text-gray-900">${conten.desc}</span>
                        <div class="text-sm text-gray-500"></div>
                        </td>
                        <td class="px-6 py-4 ">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                        </span>
                        </td>
                        <td class="px-6 py-4  text-sm text-gray-500">
                        Admin
                        </td>
                        <td class="px-6 py-4  text-right text-sm font-medium flex">
                            <div class="flex mt-[10px] border-[1px] p-[5px] w-[50px] pl-[15px]">
                            <a href="/admin/news/${conten.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                            </div>
                        </td>
                    </tr>
                    `).join("")}
                <!-- More people... -->
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
        `;
    },
};
export default ListTable;