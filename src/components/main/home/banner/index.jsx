// import bannerbg from '@/assets/Stars.png';
import darkModeBanner from '@/assets/white-mode-stars.png';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import dashboardbg from '../../../../assets/bashboardbg.png';
import video from '../../../../assets/dashboard.mp4';
import AvatarGroup from '../AvatarGroup';
import { VideoThumbnail } from '../VideoThumbnail';
import { TypingEffect } from '../typingeffect';

const Banner = () => {
  const { t } = useTranslation('home');

  return (
    <div className="p-5 md:p-10 dark:bg-[#070622] bg-[#F9F9F9] text-white h-full">
      <div
        style={{
          backgroundImage: `url(${darkModeBanner})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="py-[50px]">
          <div
            className="flex flex-col justify-center items-center gap-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Feature Badge */}
            <div
              className="flex gap-2 justify-center items-center border rounded-[8px] border-[#7A43A4] max-w-[240px] px-3.5 py-1.5"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <div className="h-2 w-2 rounded-full bg-white dark:bg-[linear-gradient(180deg,_#7A43A4_0%,_#6049BC_100%)]"></div>
              <h1 className="text-[12px] dark:text-white text-[#070622] font-normal leading-[164%] font-['Space_Grotesk']">
                {t('banner.badge')}
              </h1>
            </div>

            {/* Heading & Subheading */}
            <div data-aos="zoom-in" data-aos-delay="400">
              <h1 className="text-[40px] md:text-[60px] lg:text-[80px] xl:text-[112px] leading-tight font-bold text-center tracking-tight font-['Space_Grotesk'] text-[#070622] dark:text-white">
                {t('banner.title')}
                <span className="h-[100px]">
                  {' '}
                  <TypingEffect />
                </span>
              </h1>

              <p className="text-[#F9F9F9] text-center font-bold text-[20px] leading-[132%] tracking-[-0.2px] font-['Space_Grotesk'] mt-4">
                {t('banner.description')}
              </p>
            </div>

            {/* Avatars */}
            <div data-aos="fade-up" data-aos-delay="600">
              <AvatarGroup />
            </div>

            {/* Buttons */}
            <div data-aos="fade-up" data-aos-delay="700">
              <div className="flex gap-4">
                <Button className="font-medium capitalize text-[16px] py-5 px-5 rounded-[8px] shadow-md transition duration-300 ease-in-out dark:bg-[linear-gradient(180deg,_#7A43A4_0%,_#6049BC_100%)] dark:text-[#F9F9F9]">
                  {t('banner.primaryAction')}
                </Button>
                <Button className="dark:bg-[#101531] hover:bg-[#1a1a2e] font-semibold text-[16px] text-[#9d4edd] dark:text-[linear-gradient(180deg,_#7A43A4_0%,_#6049BC_100%)] border dark:border-[#9d4edd] border-[#7A43A4] py-5 px-5 rounded-[8px] shadow-md transition duration-300 ease-in-out bg-[#F9F9F9]">
                  {t('banner.secondaryAction')}
                </Button>
              </div>
            </div>

            {/* Video Section */}
            <div
              className="relative flex items-center justify-center mt-12"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              {/* Left glow */}
              <div
                className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full z-0 blur-[160px]"
                style={{
                  background:
                    'radial-gradient(59.43% 50% at 50% 50%, #C7EDFD 0%, #82C8E5 49.48%)',
                }}
              />

              {/* Right glow */}
              <div
                className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full z-0 blur-[160px]"
                style={{
                  background:
                    'radial-gradient(59.43% 50% at 50% 50%, #C7EDFD 0%, #82C8E5 49.48%)',
                }}
              />

              {/* VideoThumbnail in center */}
              <div className="relative z-10 w-full  max-w-4xl">
                <VideoThumbnail videoUrl={video} imageUrl={dashboardbg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
