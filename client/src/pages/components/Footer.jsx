const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full h-12 p-4 bg-white bg-opacity-70 bg-clip-padding">
      <div className="flex justify-center">
        <p className="text-xs font-roboto sm:text-sm">
          Designed and developed by{" "}
          <a
            href="https:/github.com/Noobsiecoder"
            className="font-semibold text-blue-500 underline font-roboto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abhishek&nbsp;Sriram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
