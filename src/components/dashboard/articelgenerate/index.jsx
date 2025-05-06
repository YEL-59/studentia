import HumanizerForm from "../ai-humanizer-form";
import Editor from "../shared/editor";
import { ToolSlider } from "../toolslider";

const Articelgenerate = () => {
  return (
    <div className="p-4">
      <ToolSlider />
      <div className="flex flex-col lg:flex-row gap-6">
        <Editor />
        <HumanizerForm />
      </div>
    </div>
  );
};

export default Articelgenerate;
