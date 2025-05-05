import image1 from '@/assets/Dark.png';
import reactIcon from '@/assets/icons/favourite-icon.svg';
import viewIcon from '@/assets/icons/view-icon.svg';
import { zodResolver } from '@hookform/resolvers/zod';
import { Masonry } from 'masonic';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import image2 from '@/assets/image-2.png';
import image3 from "@/assets/image-3.png";
import image4 from '@/assets/image-4.png';

const schema = z.object({
  prompt: z.string().min(1, 'Prompt is required'),
  imageStyle: z.string().optional(),
  resolution: z.string().optional(),
  lightingStyle: z.string().optional(),
  imageMedium: z.string().optional(),
  mood: z.string().optional(),
  artistName: z.string().optional(),
});

let i = 0;
const items = [
  {
    id: 1,
    image: image1,
    name: 'Nicholas Turner',
    react: 24,
    view: 15,
    avatar: 'https://avatar.iran.liara.run/public',
  },
  {
    id: 2,
    image: image2,
    name: 'Patty Stone',
    react: 24,
    view: 15,
    avatar: 'https://avatar.iran.liara.run/public',
  },
  {
    id: 3,
    image: image3,
    name: 'Noel Wilson',
    react: 24,
    view: 15,
    avatar: 'https://avatar.iran.liara.run/public',
  },
  {
    id: 4,
    image: image1,
    name: 'Nicholas Turner',
    react: 24,
    view: 15,
    avatar: 'https://avatar.iran.liara.run/public',
  },
  {
    id: 5,
    image: image4,
    name: 'Noel Wilson',
    react: 24,
    view: 15,
    avatar: 'https://avatar.iran.liara.run/public',
  },
  {
    id: 6,
    image: image3,
    name: 'Patty Stone',
    react: 24,
    view: 15,
    avatar: 'https://avatar.iran.liara.run/public',
  },
  {
    id: 7,
    image: image3,
    name: 'Noel Wilson',
    react: 24,
    view: 15,
    avatar: 'https://avatar.iran.liara.run/public',
  },
  {
    id: 8,
    image: image1,
    name: 'Nicholas Turner',
    react: 24,
    view: 15,
    avatar: 'https://avatar.iran.liara.run/public',
  },
  {
    id: 9,
    image: image2,
    name: 'Patty Stone',
    react: 24,
    view: 15,
    avatar: 'https://avatar.iran.liara.run/public',
  },
  {
    id: 10,
    image: image3,
    name: 'Noel Wilson',
    react: 24,
    view: 15,
    avatar: 'https://avatar.iran.liara.run/public',
  },
  {
    id: 11,
    image: image1,
    name: 'Nicholas Turner',
    react: 24,
    view: 15,
    avatar: 'https://avatar.iran.liara.run/public',
  },
  {
    id: 12,
    image: image4,
    name: 'Noel Wilson',
    react: 24,
    view: 15,
    avatar: 'https://avatar.iran.liara.run/public',
  },
  {
    id: 13,
    image: image3,
    name: 'Patty Stone',
    react: 24,
    view: 15,
    avatar: 'https://avatar.iran.liara.run/public',
  },
  {
    id: 14,
    image: image3,
    name: 'Noel Wilson',
    react: 24,
    view: 15,
    avatar: 'https://avatar.iran.liara.run/public',
  },
];

export default function ImageGenerator() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      imageStyle: 'Abstract',
      resolution: '668 X 740',
      lightingStyle: 'Warm',
      imageMedium: 'Pencil',
      mood: 'Natural',
      artistName: 'Leonardo da Vinci',
    },
  });

  const onSubmit = (data) => {
    console.log('Image generation data:', data);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 items-center gap-7 mb-6">
        <div className="w-full h-full bg-violet-500 flex items-center justify-center rounded-[16px] text-[40px] font-medium leading-[132%] tracking-[-0.8px]">
          Generate Image Here
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full bg-[#1a1b2f] text-white p-6 rounded-xl space-y-4"
        >
          <div>
            <div className="flex items-center justify-between">
              <label className="text-[#BCBCBC] text-base font-medium leading-[132%] tracking-[-0.32px] mb-1">
                Prompt
              </label>
              <p className="text-[#BCBCBC] text-base font-medium leading-[132%] tracking-[-0.32px]">
                Your Balance is 916 Images
              </p>
            </div>
            <input
              type="text"
              {...register('prompt')}
              className="w-full p-2 rounded-md bg-[#2c2d3c] border border-[#555] text-white"
            />
            {errors.prompt && (
              <p className="text-red-400 text-sm">{errors.prompt.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[#BCBCBC] text-base font-medium leading-[132%] tracking-[-0.32px] mb-1">
                Image Style
              </label>
              <select
                {...register('imageStyle')}
                className="w-full p-2 rounded-md bg-[#2c2d3c]"
              >
                <option>Abstract</option>
                <option>Realistic</option>
                <option>Cartoon</option>
              </select>
            </div>

            <div>
              <label className="text-[#BCBCBC] text-base font-medium leading-[132%] tracking-[-0.32px] mb-1">
                Resolution
              </label>
              <select
                {...register('resolution')}
                className="w-full p-2 rounded-md bg-[#2c2d3c]"
              >
                <option>668 X 740</option>
                <option>1024 X 768</option>
                <option>1920 X 1080</option>
              </select>
            </div>

            <div>
              <label className="text-[#BCBCBC] text-base font-medium leading-[132%] tracking-[-0.32px] mb-1">
                Lighting Style
              </label>
              <select
                {...register('lightingStyle')}
                className="w-full p-2 rounded-md bg-[#2c2d3c]"
              >
                <option>Warm</option>
                <option>Cool</option>
                <option>Neutral</option>
              </select>
            </div>

            <div>
              <label className="text-[#BCBCBC] text-base font-medium leading-[132%] tracking-[-0.32px] mb-1">
                Image Medium
              </label>
              <select
                {...register('imageMedium')}
                className="w-full p-2 rounded-md bg-[#2c2d3c]"
              >
                <option>Pencil</option>
                <option>Watercolor</option>
                <option>Oil Paint</option>
              </select>
            </div>

            <div>
              <label className="text-[#BCBCBC] text-base font-medium leading-[132%] tracking-[-0.32px] mb-1">
                Mood
              </label>
              <select
                {...register('mood')}
                className="w-full p-2 rounded-md bg-[#2c2d3c]"
              >
                <option>Natural</option>
                <option>Surreal</option>
                <option>Dark</option>
              </select>
            </div>

            <div>
              <label className="text-[#BCBCBC] text-base font-medium leading-[132%] tracking-[-0.32px] mb-1">
                Artist Name
              </label>
              <select
                {...register('artistName')}
                className="w-full p-2 rounded-md bg-[#2c2d3c]"
              >
                <option>Leonardo da Vinci</option>
                <option>Van Gogh</option>
                <option>Picasso</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg mt-4 text-lg font-semibold leading-[28px]"
          >
            Create
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-[40px] font-medium leading-[132%] tracking-[-0.8px]">
          Generate History
        </h1>
        <Masonry items={items} render={MasonryCard} columnGutter={20} />
      </div>
    </div>
  );
}

// histroy image card
const MasonryCard = ({ data: { image, avatar, name, react, view } }) => (
  <div
    className="flex flex-col gap-4"
  >
    <img src={image} />
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <img src={avatar} alt="avatar" className="w-8 h-8" />
        <p className="text-[#F9FAFB] text-xs font-semibold leading-[20px]">
          {name}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <img src={reactIcon} />
          <p className="text-[#9CA3AF] text-xs leading-[20px] tracking-[0.1px]">
            {react}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <img src={viewIcon} />
          <p className="text-[#9CA3AF] text-xs leading-[20px] tracking-[0.1px]">
            {view}
          </p>
        </div>
      </div>
    </div>
  </div>
);
