import image1 from '@/assets/Dark.png';
import reactIcon from '@/assets/icons/favourite-icon.svg';
import viewIcon from '@/assets/icons/view-icon.svg';
import { zodResolver } from '@hookform/resolvers/zod';
import { Masonry } from 'masonic';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
// export const generatedData = [
//   {
//     image: image1,
//     name: 'Nicholas Turner',
//     reaction: 24,
//     view: 15,
//     avatar: 'https://avatar.iran.liara.run/public',
//   },
// ];
const items = [
  {
    image: image1,
    name: 'Nicholas Turner',
    reaction: 24,
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
      <div className="flex items-center gap-7">
        <div className="w-1/2 h-[400px] bg-violet-500 mb-4 flex items-center justify-center rounded-[16px]">
          Generate Image Here
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2 bg-[#1a1b2f] text-white p-6 rounded-xl space-y-4"
        >
          <div>
            <label className="block text-sm mb-1">Prompt</label>
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
              <label className="block text-sm mb-1">Image Style</label>
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
              <label className="block text-sm mb-1">Resolution</label>
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
              <label className="block text-sm mb-1">Lighting Style</label>
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
              <label className="block text-sm mb-1">Image Medium</label>
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
              <label className="block text-sm mb-1">Mood</label>
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
              <label className="block text-sm mb-1">Artist Name</label>
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
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-2 rounded-lg mt-4"
          >
            Create
          </button>
        </form>
      </div>
      <Masonry items={items} render={MasonryCard} columnGutter={20} />
    </div>
  );
}


const MasonryCard = ({ data: { image, avatar, name, react, view } }) => (
  <div
    className=""
    style={{
      minHeight: `${Math.floor(Math.random() * 500)}px`,
    }}
  >
    <img src={image} />
    {/* <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <img src={avatar} />
        <p>{name}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <img src={reactIcon} />
          <p>{react}</p>
        </div>
        <div className="flex items-center gap-1">
          <img src={viewIcon} />
          <p>{view}</p>
        </div>
      </div>
    </div> */}
  </div>
);
