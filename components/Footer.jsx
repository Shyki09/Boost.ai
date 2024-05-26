const Footer = () => {
  return (
    <div>
      <footer className=" bg-gray-800">
        {/* <!-- Flex Container --> */}
        <div class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* <!-- Logo and social links container --> */}
          <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div class="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>
            {/* <!-- Logo --> */}
            <div>
              <img src="white_logo.png" className="  w-auto h-24 bg-inherit" />
            </div>
            {/* <!-- Social Links Container --> */}
            <div class="flex justify-center space-x-4">
              {/* <!-- Link 1 --> */}
              <a href="#">
                <img src="/icon-facebook.svg" alt="" class="h-8" />
              </a>
              {/* <!-- Link 2 --> */}
              <a href="#">
                <img src="/icon-youtube.svg" alt="" class="h-8" />
              </a>
              {/* <!-- Link 3 --> */}
              <a href="#">
                <img src="/icon-twitter.svg" alt="" class="h-8" />
              </a>
              {/* <!-- Link 4 --> */}
              <a href="#">
                <img src="/icon-pinterest.svg" alt="" class="h-8" />
              </a>
              {/* <!-- Link 5 --> */}
              <a href="#">
                <img src="/icon-instagram.svg" alt="" class="h-8" />
              </a>
            </div>
          </div>
          {/* <!-- List Container --> */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" class="hover:text-[green]">
                Home
              </a>
              <a href="#" className="hover:text-[green]">
                Pricing
              </a>
              <a href="#" className="hover:text-[green]"></a>
              <a href="#" className="hover:text-[green]"></a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-[green]">
                About
              </a>
              <a href="#" className="hover:text-[green]">
                Products
              </a>
              <a href="#" className="hover:text-[green]"></a>
            </div>
          </div>

          {/* <!-- Input Container --> */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updated in your inbox"
                />
                <button className="px-6 py-2 text-white rounded-full bg-[green] hover:bg-gray-200 focus:outline-none hover:text-[#6bf86b]">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2024, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
