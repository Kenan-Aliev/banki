import React from 'react';
import MortgagePage from '@/screens/MortgagePage';
import data from '@/core/data/index';

const Mortgage = (props: any) => <MortgagePage staticData={data.MortgagePage} id={props.searchParams.id} />;

export default Mortgage;
