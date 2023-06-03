import Image from 'next/image';

function ThemedImage() {
  return <>
      {/* When the theme is dark, hide this div */}
      <div data-hide-on-theme="dark">
        <Image alt="Light Mode" src="icon-moon.svg" width={400} height={400} />
      </div>

      {/* When the theme is light, hide this div */}
      <div data-hide-on-theme="light">
        <Image alt="Dark Mode" src="icon-sun.svg" width={400} height={400} />
      </div>
    </>
}

export default ThemedImage;
