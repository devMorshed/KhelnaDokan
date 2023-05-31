import React from "react";
import ImgBox from "../ImgBox";
import Button from "../shared/Button";

const Gallery = () => {
	return (
		<div>
			<section className="container mx-auto my-20">
				<div className="flex flex-col gap-10 items-center justify-center md:flex-row">
					<div className="md:w-1/3 ">
						<h3 className=" text-4xl my-4  tracking-[10px] font-light ">
							New Arrival
            </h3>
            <Button to={'/new'}> 
              Explore More
           </Button>
					</div>
					<div data-aos="zoom-in" className=" ">
						<div className="relative w-96 h-96   lg:w-[500px] lg:h-[500px]">
							<ImgBox
								position={"top-10 -left-10"}
								img={
									"https://bbts1.azureedge.net/site-images/p/2023/02/6b95f416-3cbf-44bd-bcd2-ea550aadeb7d.jpg"
								}
							/>

							<ImgBox
								position={"bottom-5 -left-5"}
								img={
									"https://bbts1.azureedge.net/images/p/full/2022/04/ca375348-236f-4dab-8a9f-93e229377244.jpg"
								}
							/>

							<ImgBox
								img={
									"https://bbts1.azureedge.net/images/p/full/2022/10/9776d655-2df5-42be-b07c-fc66d799c3df.jpg"
								}
								position={
									"bottom-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 h-56 w-44 z-10"
								}
							/>
							<ImgBox
								position={"bottom-0 right-0"}
								img={
									"https://bbts1.azureedge.net/images/p/full/2023/05/4029c250-5882-41c4-833a-a560f750f435.jpg"
								}
							/>
							<ImgBox
								position={"top-5 right-0"}
								img={
									"https://bbts1.azureedge.net/site-images/p/2021/11/4247c3b5-bedc-441e-967d-9df147298101.jpg"
								}
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Gallery;
