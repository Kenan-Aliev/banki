import React, { useMemo } from 'react';
import s from './Slide.module.scss';
import SlideItem from '@/components/SlideItem/SlideItem';
import { StaticImageData } from 'next/image';
import Slider from '@/components/Slider/Slider';
import useDeviceSize from '@/hooks/useDeviceSize';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

type iconsSlideT = {
  img: StaticImageData;
  name: string;
  w: number;
  link?: string;
};
type Props = {
  data: iconsSlideT[];
};

const Slide = ({ data }: Props) => {

  const [width] = useDeviceSize()

  const slides = useMemo(() => {
    return data.map((el, index) => {
      return {
        node: <SlideItem width={el.w} key={index} img={el.img} name={el.name} />,
        link: el.link
      }
    })
  }, [data]);


  return (
    <div className={s.slide}>
      {width > 480 ? <Slider
        data={slides}
        infinite={false}
        leftArr={true}
        rightArr={true}
        centered={true}
        autoplay={true}
        responsive={{
          "320": 1,
          "480": 2,
          "640": 3,
          "768": 4,
          "1500": 5
        }} />
        :

        <>
          <Grid container justifyContent='space-between' rowGap='15px'>
            {data.slice(0, data.length / 2).map((slide, index) => {
              return <Grid item xs={5.9} key={index}>
                <Link href={slide.link}>
                  <SlideItem img={slide.img} name={slide.name} width={slide.w} />
                </Link>
              </Grid>
            })}
          </Grid>
          <Accordion
            elevation={0}
            sx={{
              background: 'inherit',
              border: 'none',
              mt: '20px',
              "::before": {
                content: 'none'
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#4DA7FF' }} />}
              sx={{
                width: 'fit-content',
                color: '#4DA7FF',
                padding: 0
              }}
            >
              <Typography>Показать ещё</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container justifyContent='space-between' rowGap='15px'>
                {data.slice(data.length / 2, data.length).map((slide, index) => {
                  return <Grid item xs={5.9} key={index}>
                    <Link href={slide.link}>
                      <SlideItem img={slide.img} name={slide.name} width={slide.w} />
                    </Link>
                  </Grid>
                })}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </>
      }
    </div>
  );
};

export default Slide;
