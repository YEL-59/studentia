import aiWritingTools from '@/assets/icons/writing-tools.svg';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Zod schema for form validation
const formSchema = z.object({
  targetText: z.string().min(1, 'Target text is required'),
  intensityLevel: z.enum(['Low', 'High'], {
    required_error: 'Intensity level is required',
  }),
  literacyLevel: z.enum(['High School', 'Primary School'], {
    required_error: 'Literacy level is required',
  }),
  rewrite: z.string().optional(),
});

export default function HumanizerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      targetText: '',
      intensityLevel: 'Low',
      literacyLevel: 'High School',
      rewrite: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form data:', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div
        className="
        rounded-xl
        bg-[#1C202B]
        p-6
        shadow-[17px_5px_50px_0px_rgba(114,75,150,0.25)]
        text-white
        font-sans
        mx-auto
        flex flex-col gap-5
      "
      >
        <div className="flex items-center gap-2">
          <img src={aiWritingTools} alt="icon" className="w-8 h-8" />
          <h1 className="text-2xl font-bold leading-[132%] tracking-[-0.24px]">
            AI Humanizer
          </h1>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-normal leading-[164%]">
            Target Text
          </label>
          <textarea
            rows={6}
            placeholder="Specify What Kind of function or piece of code you want to generate"
            {...register('targetText')}
            className="w-full bg-transparent outline-none placeholder:!text-[#BCBCBC] text-xs leading-[164%] px-5 py-3 border border-[rgba(122,67,164,0.3)] rounded-[12px]"
          />
          {errors.targetText && (
            <p className="text-red-400 text-sm">{errors.targetText.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-normal leading-[164%]">
            Intensity Level
          </label>
          <select
            {...register('intensityLevel')}
            className="w-full cursor-pointer bg-[#1C202B] outline-none placeholder:!text-[#BCBCBC] text-[#BCBCBC] text-xs leading-[164%] px-5 py-3 border border-[rgba(122,67,164,0.3)] rounded-[12px]"
          >
            <option value="Low">Low</option>
            <option value="High">High</option>
          </select>
          {errors.intensityLevel && (
            <p className="text-red-400 text-sm">
              {errors.intensityLevel.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-normal leading-[164%]">
            Literacy Level
          </label>
          <select
            {...register('literacyLevel')}
            className="w-full cursor-pointer bg-[#1C202B] outline-none placeholder:!text-[#BCBCBC] text-[#BCBCBC] text-xs leading-[164%] px-5 py-3 border border-[rgba(122,67,164,0.3)] rounded-[12px]"
          >
            <option value="High School">High School</option>
            <option value="Primary School">Primary School</option>
          </select>
          {errors.literacyLevel && (
            <p className="text-red-400 text-sm">
              {errors.literacyLevel.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="
            mt-4
            px-4
            py-2
           bg-gradient-to-b
  from-[#7A43A4]
  to-[#6049BC]
            w-full
            rounded-[12px]
            cursor-pointer
          "
        >
          Submit
        </button>
      </div>
    </form>
  );
}
