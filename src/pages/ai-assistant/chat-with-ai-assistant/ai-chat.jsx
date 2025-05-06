import { useParams } from 'react-router';
import aiAssistantEight from '@/assets/icons/ai-assistant-eight.svg';
import aiAssistantFive from '@/assets/icons/ai-assistant-five.svg';
import aiAssistantFour from '@/assets/icons/ai-assistant-four.svg';
import aiAssistantNine from '@/assets/icons/ai-assistant-nine.svg';
import {
  default as aiAssistantOne,
  default as aiAssistantTen,
} from '@/assets/icons/ai-assistant-one.svg';
import aiAssistantSeven from '@/assets/icons/ai-assistant-seven.svg';
import aiAssistantSix from '@/assets/icons/ai-assistant-six.svg';
import {
  default as aiAssistantThree,
  default as aiAssistantTwelve,
} from '@/assets/icons/ai-assistant-three.svg';
import {
  default as aiAssistantEleven,
  default as aiAssistantTwo,
} from '@/assets/icons/ai-assistant-two.svg';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import sendIcon from '@/assets/icons/send.svg';
import promptLibrary from '@/assets/icons/prompt-library.svg';
import chatgptIcon from '@/assets/icons/chatgpt-icon.svg';
import uploadIcon from '@/assets/icons/upload-icon.svg';
import microPhoneIcon from '@/assets/icons/microphone-icon.svg';

function AiChat() {
      const aiAssistants = [
        {
          id: 1,
          profile: aiAssistantOne,
          name: 'Floyd Miles',
          username: 'Wade Warren',
          designation: 'Personal Trainer',
          message:
            'Hey, my name is Floyd Miles and I am a professional personal trainer, I can help you get muscled up in no time.',
        },
        {
          id: 2,
          profile: aiAssistantTwo,
          name: 'Eleanor Pena',
          username: 'Courtney Henry',
          designation: 'Nutrition Specialist',
          message:
            "Hi, I'm Eleanor Pena, your nutrition expert. Let's create a meal plan that fuels your fitness goals.",
        },
        {
          id: 3,
          profile: aiAssistantThree,
          name: 'Marvin McKinney',
          username: 'Leslie Alexander',
          designation: 'Strength Coach',
          message:
            "I'm Marvin McKinney, a strength and conditioning coach. I'll help you build power and endurance.",
        },
        {
          id: 4,
          profile: aiAssistantFour,
          name: 'Jacob Jones',
          username: 'Guy Hawkins',
          designation: 'Yoga Instructor',
          message:
            "Namaste, I'm Jacob Jones. Let me guide you through yoga practices for flexibility and mindfulness.",
        },
        {
          id: 5,
          profile: aiAssistantFive,
          name: 'Devon Lane',
          username: 'Jane Cooper',
          designation: 'Cardio Expert',
          message:
            "Hello! I'm Devon Lane, specializing in cardiovascular training to boost your heart health and stamina.",
        },
        {
          id: 6,
          profile: aiAssistantSix,
          name: 'Kathryn Murphy',
          username: 'Esther Howard',
          designation: 'Pilates Instructor',
          message:
            "I'm Kathryn Murphy, your Pilates coach. Let's work on your core strength and posture together.",
        },
        {
          id: 7,
          profile: aiAssistantSeven,
          name: 'Ronald Richards',
          username: 'Cameron Williamson',
          designation: 'CrossFit Trainer',
          message:
            "Hey there! I'm Ronald Richards, a CrossFit Level 2 trainer ready to push your limits.",
        },
        {
          id: 8,
          profile: aiAssistantEight,
          name: 'Darlene Robertson',
          username: 'Robert Fox',
          designation: 'Physical Therapist',
          message:
            "Hi, I'm Darlene Robertson. I combine physical therapy with exercise for injury prevention and recovery.",
        },
        {
          id: 9,
          profile: aiAssistantNine,
          name: 'Arlene McCoy',
          username: 'Bessie Cooper',
          designation: 'Dance Fitness Coach',
          message:
            "Let's move! I'm Arlene McCoy, and I'll make fitness fun with dance-based workouts.",
        },
        {
          id: 10,
          profile: aiAssistantTen,
          name: 'Jerome Bell',
          username: 'Albert Flores',
          designation: 'Senior Fitness Coach',
          message:
            "Hello, I'm Jerome Bell, specializing in safe and effective workouts for mature adults.",
        },
        {
          id: 11,
          profile: aiAssistantEleven,
          name: 'Kristin Watson',
          username: 'Jenny Wilson',
          designation: 'HIIT Specialist',
          message:
            "I'm Kristin Watson, and I'll help you maximize results with high-intensity interval training.",
        },
        {
          id: 12,
          profile: aiAssistantTwelve,
          name: 'Cody Fisher',
          username: 'Ralph Edwards',
          designation: 'Sports Performance Coach',
          message:
            "Hey athlete! I'm Cody Fisher, here to enhance your sports-specific performance and agility.",
        },
      ];
  const { id } = useParams();
//   id = 11
  const assistant = aiAssistants?.find((data)=>data?.id === Number(id))
console.log(assistant)
  return (
    <div className="flex flex-col justify-between min-h-[calc(100dvh-120px)]">
      <div>
        <div className="border-b border-[] py-2 flex items-center gap-[22px]">
          <img
            src={assistant?.profile}
            alt=""
            className="rounded-full w-16 h-16"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-medium leading-[132%] tracking-[-0.48px] text-[#F9F9F9]">
              {assistant?.name}
            </h1>
            <p className="text-sm text-[#BCBCBC] uppercase font-medium leading-[164%]">
              {assistant?.username}
            </p>
          </div>
        </div>
        <div className="rounded-[29px_12px_12px_26px] bg-gradient-to-b from-[rgba(122,67,164,0.3)] to-[rgba(96,73,188,0.17)] flex items-center gap-4 mt-8">
          <img
            src={assistant?.profile}
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <p className="text-sm leading-[164%] text-[#F9F9F9] text-opacity-10">
            {assistant?.message}
          </p>
        </div>
      </div>
      <div className="rounded-[16px] border border-[#7A43A44D] p-6 flex flex-col gap-6">
        <Input
          placeholder="What do uou want to write?"
          className={`text-lg leading-[164%] text-[#BCBCBC] border-none outline-none focus-visible:ring-0`}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full border border-[#7A43A4]">
              <img src={uploadIcon} alt="icon" />
            </div>
            <div className="p-3 rounded-full border border-[#7A43A4]">
              <img src={microPhoneIcon} alt="icon" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer p-3 rounded-[46px] border border-[#7A43A4]">
              <img src={chatgptIcon} alt="icon" />
              <p className="text-xs leading-[164%]"> GPT 40</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer p-3 rounded-[46px] border border-[#7A43A4]">
              <img src={promptLibrary} alt="icon" />
              <p className="text-xs leading-[164%]"> Prompt Libary</p>
            </div>
          </div>
          <Button className={`flex items-center gap-1 cursor-pointer`}>
            <p>Send</p>
            <img src={sendIcon} alt="icon" />
          </Button>
        </div>
      </div>
    </div>
  );
}


export default AiChat;
