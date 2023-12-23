import React, { useState } from 'react';
import Image from 'next/image';
import ques_I from '@/assets/icons/banki_icon/Question_i.svg';
import dang_i from '@/assets/icons/banki_icon/Danger_i.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { DepositItemT } from '@/models/Deposit/Deposit';
import Application from '@/components/Application/Application';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { currencies } from '@/core/data/currency';
import { baseUrl } from '@/core/const/baseUrl';
import { Grid, Box, Typography, Button, SxProps, Theme } from '@mui/material';



const rootBoxStyles: SxProps<Theme> = {
  width: '100%',
  borderRadius: '14px',
  border: '1px solid #d9dbdf',
  background: '#fff',
  padding: '25px 20px',
  "& h2,p": {
    fontFamily: 'inherit'
  }
}

const bankTitleStyles: SxProps<Theme> = {
  color: '#000',
  fontSize: '24px',
  fontFamily: 'inherit',
  fontWeight: 'bold',
  "@media(max-width:600px)": {
    fontSize: '18px'
  }
}



const infoItemTitleStyles: SxProps<Theme> = {
  color: '#4da7ff',
  fontWeight: 500
}

const infoItemTextStyles: SxProps<Theme> = {
  color: '#121212',
  fontWeight: 500,
  fontSize: '20px'
}

const countBtnStyles: SxProps<Theme> = {
  color: '#4da7ff',
  fontSize: '16px',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  cursor: 'pointer'
}

const infoItemGridStyles: SxProps<Theme> = {
  "@media(max-width:600px)": {
    display: 'flex',
    justifyContent: 'space-between',
    m: '10px 0'
  }
}

const dangerBtnGridStyles: SxProps<Theme> = {
  borderRadius: '5px',
  border: '1px solid var(--Stroke-3, #4DA7FF)',
  background: '#FFF',
  height: '50px',
  boxShadow: '0px 2.3px 6px 0px rgba(217, 231, 250, 0.40)',
  backdropFilter: 'blur(7px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}


interface DepositOfferItemProps {
  item: DepositItemT;
  openChildren?: (bankId: number) => void;
  child?: boolean;
  count?: number
  activeCurrency: string
}

const DepositOfferItem = React.memo((props: DepositOfferItemProps) => {
  const {
    item: { deposit_name, interest_rate, amount_range, term_range, deposit_id, bank_id, bank_logo, bank_title },
    openChildren,
    child,
    count,
    activeCurrency
  } = props;

  const [openApplicationForm, setOpenApplicationForm] = useState(false)

  const currency = currencies.find((c) => c.value == activeCurrency)?.text

  const handleChangeApplicationForm = () => {
    setOpenApplicationForm(!openApplicationForm)
  }

  return (
    <Box sx={rootBoxStyles}>
      <Application
        open={openApplicationForm}
        handleClose={handleChangeApplicationForm}
        productId={deposit_id}
        productType='deposit' />
      <Grid container mb='10px'>
        <Grid item xs={3} sm={3} md={3} lg={0.7} xl={0.7}>
          <Image src={baseUrl + bank_logo} alt={'иконка банка'} width={50} height={50} />
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={4.5} xl={4.5}>
          <Typography
            sx={bankTitleStyles}
            component='h2'
          >
            {bank_title}
          </Typography>
          <Typography>{deposit_name}</Typography>
        </Grid>
        <Grid item xs={12} lg={2} xl={2} sx={infoItemGridStyles}>
          <Box sx={{
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
            marginBottom: '10px'
          }}>
            <Typography sx={infoItemTitleStyles}>Ставка</Typography>
            <Image src={ques_I} alt={'иконка вопроса'} />
          </Box>
          <Typography sx={infoItemTextStyles}>
            {interest_rate} %
          </Typography>
        </Grid>
        <Grid item xs={12} lg={2} xl={2} sx={infoItemGridStyles}>
          <Typography
            sx={infoItemTitleStyles}
            mb='10px'
          >
            Срок
          </Typography>
          <Typography sx={infoItemTextStyles}>
            {term_range.min} - {term_range.max} мес.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={2} xl={2} sx={infoItemGridStyles}>
          <Typography
            sx={infoItemTitleStyles}
            mb='10px'
          >
            Сумма
          </Typography>
          <Typography sx={infoItemTextStyles}>
            {amount_range.max ? `${amount_range.min} — ${amount_range.max}` : `от ${amount_range.min}`} {currency}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12} lg={0.8} xl={0.8}
          sx={dangerBtnGridStyles}>
          <Button fullWidth>
            <Image src={dang_i} alt='иконка опасности' />
          </Button>
        </Grid>
      </Grid >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          "@media(max-width:600px)": {
            flexDirection: 'column-reverse',
          }
        }}
      >
        {count && count > 0
          ? (
            <Box
              sx={{
                "@media(max-width:600px)": {
                  m: '20px auto 0'
                }
              }}
            >
              <Typography sx={countBtnStyles}
                onClick={(e) => openChildren(+bank_id)}
              >
                Ещё {count} вкладов
                {child ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Typography>
            </Box>
          )
          : null}
        <Box
          sx={{
            marginLeft: 'auto',
            width: '20%',
            "@media(max-width:600px)": {
              width: '100%',
              marginLeft: 0
            }
          }}>
          <BlueBtn text={'Открыть вклад'} fSize={20} onClick={handleChangeApplicationForm} />
        </Box>
      </Box>
    </Box >
  );
});

export default DepositOfferItem;



