import { categories } from "@/data/services";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-gradient mb-4">PUREons</h3>
          <p className="text-gray-400 text-sm">
            Everything you need. One platform.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Categories</h4>
          <ul className="space-y-2">
            {categories.slice(1).map((cat) => (
              <li key={cat}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            {["About", "Careers", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            {["Privacy", "Terms", "Cookies", "Licenses"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} PUREons. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
