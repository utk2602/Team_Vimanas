
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function Footer() {
  const footerLinks = {
    contact: [
      { name: 'Contact', href: '#' },
      { name: 'Media', href: '#' },
      { name: 'News From HQ', href: '#' },
    ],
    corporate: [
      { name: 'Careers', href: '#' },
      { name: 'Sustainable Business', href: '#' },
      { name: 'Regulatory Disclosures', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Team Vimaanas', href: '#' },
    ],
    store: [
      { name: 'Help Centre', href: '#' },
      { name: 'Shipping and Returns Policy', href: '#' },
    ],
    legal: [
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Cookie Settings', href: '#' },
    ],
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Contact & Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact & Media</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h3 className="text-lg font-bold mb-4">Corporate</h3>
            <ul className="space-y-2">
              {footerLinks.corporate.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Store */}
          <div>
            <h3 className="text-lg font-bold mb-4">Store</h3>
            <ul className="space-y-2">
              {footerLinks.store.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Location */}
          <div>
            <h3 className="text-lg font-bold mb-4">Store Location</h3>
            <button className="flex items-center space-x-2 bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              <img alt="Flag" className="w-6 h-4" />
              <span> ₹(INR)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Stay in the Loop */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay in the Loop</h3>
            <div className="space-y-4">
              <a href="#" className="block">
                <img
                  src="/placeholder.svg"
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="/placeholder.svg"
                  alt="Get it on Google Play"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-white/60">Powered By</span>
              <img
                src="/placeholder.svg"
                alt="Vit vellore"
                className="h-6 w-auto"
              />
            </div>
            <div className="text-white/60 text-center md:text-left">
              © Team Vimaanas, under licence to Vimaanas IP holdings
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
