import { useThemeColors } from '/@src/composable/useThemeColors';
import { gauge } from 'billboard.js';
export function usePersonalScoreGauge() {
    const themeColors = useThemeColors();
    const personalScoreGaugeOptions = ref({
        data: {
            columns: [['data', 91.4]],
            type: gauge(),
        },
        gauge: {},
        color: {
            pattern: [
                themeColors.accent,
                themeColors.info,
                themeColors.orange,
                themeColors.green,
            ],
            threshold: {
                values: [30, 60, 90, 100],
            },
        },
        size: {
            height: 120,
        },
        padding: {
            bottom: 20,
        },
        legend: {
            show: false,
            position: 'inset',
        },
    });
    const onPersonalScoreGaugeReady = (billboard) => {
        setTimeout(function () {
            billboard.load({
                columns: [['data', 10]],
            });
        }, 1000);
        setTimeout(function () {
            billboard.load({
                columns: [['data', 50]],
            });
        }, 2000);
        setTimeout(function () {
            billboard.load({
                columns: [['data', 70]],
            });
        }, 3000);
        setTimeout(function () {
            billboard.load({
                columns: [['data', 0]],
            });
        }, 4000);
        setTimeout(function () {
            billboard.load({
                columns: [['data', 100]],
            });
        }, 5000);
    };
    return {
        personalScoreGaugeOptions,
        onPersonalScoreGaugeReady,
    };
}
//# sourceMappingURL=personalScoreGauge.js.map