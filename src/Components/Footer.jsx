import { Footer } from "flowbite-react";

function FooterBar() {
  return (
    <Footer className="rounded-none border-gray-200 bg-gray-200 p-4 dark:bg-gray-800 sm:p-6">
      <div className="w-full lg:px-10">
        <div className="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="/" class="flex items-center">
              <img
                src="https://i.imgur.com/fTDFGfu.png"
                class="mr-3 h-16"
                alt="FlowBite Logo"
              />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
            <div>
              <Footer.Title title="Follow Us" className="text-gray-800" />
              <Footer.LinkGroup
                className="text-base text-gray-600 dark:text-gray-400"
                col
              >
                <Footer.Link
                  href="https://www.facebook.com/laptopnusantara.garut/"
                  target="blank"
                >
                  Facebook
                </Footer.Link>
                <Footer.Link
                  href="https://www.instagram.com/laptopnusantara.garut/"
                  target="blank"
                >
                  Instagram
                </Footer.Link>
                <Footer.Link
                  href="https://www.tiktok.com/@plngarutd19"
                  target="blank"
                >
                  TikTok
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Marketplace" className="text-gray-800" />
              <Footer.LinkGroup
                className="text-base text-gray-600 dark:text-gray-400"
                col
              >
                <Footer.Link
                  href="https://www.tokopedia.com/puslapnusgrt"
                  target="_blank"
                >
                  Tokopedia
                </Footer.Link>
                <Footer.Link
                  href="https://shopee.co.id/pusatlaptopnusantaragarut"
                  target="_blank"
                >
                  Shopee
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Kontak" className="text-gray-800" />
              <Footer.LinkGroup
                className="text-base text-gray-600 dark:text-gray-400"
                col
              >
                <Footer.Link href="mailto:laptopnusantara.grt@gmail.com">
                  Email
                </Footer.Link>
                <Footer.Link href="https://wa.link/dhurui">
                  WhatsApp
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Pusat Laptop Nusantara Garut™. All Rights Reserved."
            href="/"
            year={2021}
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterBar;
