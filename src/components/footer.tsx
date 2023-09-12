function Footer() {
  return (
    <div className="container mt-24 flex flex-col gap-8 justify-center items-center">
      <div className="flex items-center gap-10">
        <img src="/fa-brands_facebook-square.png" alt="facebook_icon" />
        <img src="/fa-brands_instagram.png" alt="facebook_icon" />
        <img src="/fa-brands_twitter.png" alt="facebook_icon" />
        <img src="/fa-brands_youtube.png" alt="facebook_icon" />
      </div>
      <div className="flex items-center gap-10">
        <div className="text-[#111827] md:text-[1.125rem] text-center font-bold cursor-pointer">
          Conditions of Use
        </div>
        <div className="text-[#111827] md:text-[1.125rem] text-center font-bold cursor-pointer">
          Privacy & Policy
        </div>
        <div className="text-[#111827] md:text-[1.125rem] text-center font-bold cursor-pointer">
          Press Room
        </div>
      </div>
      <p className="text-[#6B7280] text-[1rem] md:text-[1.125rem] font-bold text-center">
        © 2021 MovieBox by Adriana Eka Prayudha{" "}
      </p>
    </div>
  );
}

export default Footer;
