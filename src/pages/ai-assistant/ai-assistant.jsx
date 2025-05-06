import cardDeisgn from '@/assets/icons/ai-assistant-card-design.svg';
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
import { Link } from 'react-router';

function AiAssistant() {
  const aiAssistants = [
    {
      id: 1,
      profile: aiAssistantOne,
      name: 'Floyd Miles',
      username: 'Wade Warren',
    },
    {
      id: 2,
      profile: aiAssistantTwo,
      name: 'Eleanor Pena',
      username: 'Courtney Henry',
    },
    {
      id: 3,
      profile: aiAssistantThree,
      name: 'Marvin McKinney',
      username: 'Leslie Alexander',
    },
    {
      id: 4,
      profile: aiAssistantFour,
      name: 'Jacob Jones',
      username: 'Guy Hawkins',
    },
    {
      id: 5,
      profile: aiAssistantFive,
      name: 'Devon Lane',
      username: 'Jane Cooper',
    },
    {
      id: 6,
      profile: aiAssistantSix,
      name: 'Kathryn Murphy',
      username: 'Esther Howard',
    },
    {
      id: 7,
      profile: aiAssistantSeven,
      name: 'Ronald Richards',
      username: 'Cameron Williamson',
    },
    {
      id: 8,
      profile: aiAssistantEight,
      name: 'Darlene Robertson',
      username: 'Robert Fox',
    },
    {
      id: 9,
      profile: aiAssistantNine,
      name: 'Arlene McCoy',
      username: 'Bessie Cooper',
    },
    {
      id: 10,
      profile: aiAssistantTen,
      name: 'Jerome Bell',
      username: 'Albert Flores',
    },
    {
      id: 11,
      profile: aiAssistantEleven,
      name: 'Kristin Watson',
      username: 'Jenny Wilson',
    },
    {
      id: 12,
      profile: aiAssistantTwelve,
      name: 'Cody Fisher',
      username: 'Ralph Edwards',
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-6">
      {aiAssistants.map((data) => (
        <Link
          key={data?.id}
          className="bg-gradient-to-b from-[#7A43A44D] to-[#6049BC2B] rounded-[18px] border border-[#313D4F] relative"
          to={`/ai-chat/${data?.id}`}
        >
          <img src={cardDeisgn} alt="card design" className="w-full h-full" />
          <div className="flex flex-col items-center gap-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]">
            <img src={data?.profile} alt="profile" className="rounded-full" />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-xl font-medium leading-[132%] tracking-[-0.4px]">
                {data?.name}
              </h1>
              <p className="text-[#FFF] text-opacity-60 text-sm leading-[164%]">
                {data?.username}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AiAssistant;
