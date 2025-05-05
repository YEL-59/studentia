import HumanizerForm from "@/components/dashboard/ai-humanizer-form";
import Editor from "@/components/dashboard/shared/editor";

function Humanizer() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <Editor />
      <HumanizerForm/>
    </div>
  );
}

export default Humanizer;
