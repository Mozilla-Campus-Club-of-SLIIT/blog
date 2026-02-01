export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Bottom Bar: Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Mozilla Campus Club of SLIIT. Made with ❤️ by SLIIT Mozillians
          </p>
        </div>
      </div>
    </footer>
  );
}
