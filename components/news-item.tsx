import Image from "next/image";

function NewsItem() {
  return <div className="border-2 border-black @container">
      <div className="@lg:flex @lg:flex-row-reverse">
        <div className="relative h-72 w-full">
          <Image
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt="news"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl">News Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            voluptatem quibusdam delectus aperiam dolor odio aliquid nemo esse
            accusantium dolores.
          </p>
        </div>
      </div>
    </div>
}

export default NewsItem;
