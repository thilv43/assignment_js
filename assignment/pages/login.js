const Login = {
    render() {
        return /* html */ `
        <div class="max-w-screen-lg m-auto flex">
        <div class="bg-[#cad2c5] my-[20px] border-[1px] h-[40rem] w-[40rem] ml-[25%] rounded-2xl">
        <div class="py-[10px] text-3xl font-bold text-center mt-[20px]">Login to your account</div>
    
        <div class=" border-[2px] w-[30rem] h-[30rem] ml-[5rem] mt-[2rem] rounded-2xl">
            <form action="" class="ml-[15%] mt-[30px]">
                <div class="">
                    <label for="" class="block text-xl my-[10px]">Email Address</label>
                    <input type="text" placeholder="" class="block w-[20rem] border-black rounded-[5px] p-[7px] border-[1px] my-[10px] ">
                </div>
                <div class="">
                    <label for="" class="block text-xl my-[10px]">Password</label>
                    <input type="text" placeholder="" class="block w-[20rem] border-black rounded-[5px] p-[7px] border-[1px] my-[10px] ">
                </div>
                <div class="flex justify-between mt-[10px]">
                    <div class="flex">
                        <input type="checkbox" class="mt-[2px]">
                        <label for="" class="block text-[#03045e] text-sm">Remember me</label>
                    </div>
                
                    <div class="flex mr-[70px] text-[#03045e] text-sm">
                        <a href="">Forgot your password</a>
                    </div>
                </div>
                <div class="mt-[30px]">
                    <input type="submit" value="Login" class="p-[10px] border-[1px] bg-[#0253a4] text-2xl text-[#fff] rounded-lg w-[20rem]">
                </div>
            </form>
            <div class="text-sm text-[#0253a4] ml-[90px] mt-[20px]">----------- Or continue with -----------</div>
            <div class="flex justify-center items-center text-center mt-[10px]">
                <div class="border-[1px] p-[7px] w-[6rem] rounded-xl m-[10px] pl-[30px]">
                    <svg class="h-5 w-5 text-[#03045e]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </div>
                <div class="border-[1px] p-[7px] w-[6rem] rounded-xl m-[10px] pl-[30px]">
                    <svg class="h-5 w-5 text-[#000]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg>
                </div>
                <div class="border-[1px] p-[7px] w-[6rem] rounded-xl m-[10px] pl-[30px]">
                    <svg class="h-5 w-5 text-[#fff]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-[20px] ml-[30px]">
                    <a href="/">
                        <button class="bg-[#000] text-2xl mr-[7px] p-[5px] w-[40px] text-[#fff] rounded-md hover:bg-[#012a4a]">X</button>
                    </a>
        </div>
    </div>
    </div>
        `;
    },
};
export default Login;