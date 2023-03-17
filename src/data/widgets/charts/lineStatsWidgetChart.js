import { useThemeColors } from '/@src/composable/useThemeColors';
export function useLineStatsWidgetCharts() {
    const themeColors = useThemeColors();
    const lineStatsChartOptions = ref({
        series: [
            {
                name: 'Revenue',
                data: [10835, 40214, 36257, 51411, 45697, 61221, 65295, 91512, 75648],
            },
        ],
        chart: {
            height: 250,
            type: 'line',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: [themeColors.accent],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [2, 2, 2],
            curve: 'smooth',
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'],
                opacity: 0.5,
            },
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return '$' + val;
                },
            },
        },
    });
    return {
        lineStatsChartOptions,
    };
}
//# sourceMappingURL=lineStatsWidgetChart.js.map