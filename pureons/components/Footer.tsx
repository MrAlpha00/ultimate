import { categories } from "@/data/services";

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-3">
            PURE<span className="text-primary">ons</span>
          </h3>
          <p className="text-text-sub text-sm leading-relaxed">
            Everything you need. One platform.
          </p>
        </div>

        <div>
          <h4 className="text-foreground font-semibold mb-4">Categories</h4>
          <ul className="space-y-3">
            {categories.slice(1).map((cat) => (
              <li key={cat}>
                <a
                  href="#"
                  className="text-text-sub hover:text-primary transition-colors duration-200 text-sm"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-foreground font-semibold mb-4">Company</h4>
          <ul className="space-y-3">
            {["About", "Careers", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-text-sub hover:text-primary transition-colors duration-200 text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-foreground font-semibold mb-4">Legal</h4>
          <ul className="space-y-3">
            {["Privacy", "Terms", "Cookies", "Licenses"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-text-sub hover:text-primary transition-colors duration-200 text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-border text-center">
        <p className="text-text-sub text-sm">
          &copy; {new Date().getFullYear()} PUREons. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
