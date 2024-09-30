import { GeistMono } from "geist/font/mono";

export function Footer() {
  return (
    <footer className={`${GeistMono.className} pt-3 pb-6 flex text-xs text-center mt-3 dark:text-gray-400 text-gray-500`}>
      <div className="grow text-left">
        Benjamin Kawuki (
        <a  href="mailto:benjaminkawuki0@gmail.com">
          @benjamin
        </a>
        )
      </div>
      <div>
        <a target="_blank" href="https://github.com/ChiefExecutiv">
          Source
        </a>
      </div>
    </footer>
  );
}