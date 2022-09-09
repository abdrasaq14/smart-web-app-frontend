import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box, Card } from '@mui/material';
import {ApiLoadProfileChart} from "@src/api/operationsHome/types";

const styles = {
    container: {
        borderRadius: '16px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '32px',
        width: '700px',
    },
    content: { paddingTop: '8px', fontWeight: 'bold', fontSize: '14px', lineHeight: '17px' },
};

const ChartGraphCard = (props: React.PropsWithChildren<{ title: string }>) => {
    return (
        <Card sx={styles.container} variant="outlined">
            <Box sx={styles.content}>{props.title}</Box>
            {props.children}
        </Card>
    );
};

type Props = { title: string, data: ApiLoadProfileChart };

const Chart = ({ title, data }: Props) => {
    const options = {
        xAxis: {
            data: data.xAxis,
        },
        yAxis: {},
        series: data.yAxis.map(seriesValue => {
            return {
                data: seriesValue,
                type: 'line',
                areaStyle: {},
            }
        })
    };

    return (
        <ChartGraphCard title={title}>
            <ReactECharts option={options} />
        </ChartGraphCard>
    );
};

export default Chart;
