import ContentRewriter from "../contentewriter";
import Editor from "../shared/editor";
import SummarizetextForm from "../SummarizetextForm";
import { ToolSlider } from "../toolslider";

const Summarizetext = () => {
  return (
    <div className="p-4 ">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side: Slider + Editor */}
        <div className="flex flex-col gap-4 lg:w-2/3 w-full">
          {/* Slider should go full width across the editor */}
          <div className="-mx-4 px-4">
            <ToolSlider />
          </div>

          {/* Editor */}
          <Editor />
        </div>

        <div className="lg:w-1/3 w-full">
          <SummarizetextForm />
        </div>
      </div>
    </div>
  );
};

export default Summarizetext;
