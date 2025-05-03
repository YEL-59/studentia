import bg from "../../../../assets/platformimg.png";

const Platform = () => {
  return (
    <>
      <div>
        <div className="w-full bg-[#070622] py-8">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center ">
            <div>
              <h1 className="text-[48px] font-medium leading-[132%] tracking-[-0.96px] font-['Space_Grotesk'] text-[#FFF] max-w-xl">
                Only platform that you will ever need{" "}
              </h1>
              <p className="text-[20px] font-medium leading-[132%] tracking-[-0.4px] font-['Space_Grotesk'] text-[#BCBCBC] max-w-3xl mt-8">
                We have you covered from all AI Text & Audio generation aspects
                to allow you to focus only on your content creation
              </p>
            </div>
            <div>
              <img src={bg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Platform;
