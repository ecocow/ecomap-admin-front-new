import { useThemeColors } from '/@src/composable/useThemeColors';
import { scatter } from 'billboard.js';
export function useScatterSimple() {
    const themeColors = useThemeColors();
    const options = ref({
        data: {
            xs: {
                setosa: 'setosa_x',
                versicolor: 'versicolor_x',
            },
            columns: [
                [
                    'setosa_x',
                    3.5,
                    3,
                    3.2,
                    3.1,
                    3.6,
                    3.9,
                    3.4,
                    3.4,
                    2.9,
                    3.1,
                    3.7,
                    3.4,
                    3,
                    3,
                    4,
                    4.4,
                    3.9,
                    3.5,
                    3.8,
                    3.8,
                    3.4,
                    3.7,
                    3.6,
                    3.3,
                    3.4,
                    3,
                    3.4,
                    3.5,
                    3.4,
                    3.2,
                    3.1,
                    3.4,
                    4.1,
                    4.2,
                    3.1,
                    3.2,
                    3.5,
                    3.6,
                    3,
                    3.4,
                    3.5,
                    2.3,
                    3.2,
                    3.5,
                    3.8,
                    3,
                    3.8,
                    3.2,
                    3.7,
                    3.3,
                ],
                [
                    'versicolor_x',
                    3.2,
                    3.2,
                    3.1,
                    2.3,
                    2.8,
                    2.8,
                    3.3,
                    2.4,
                    2.9,
                    2.7,
                    2,
                    3,
                    2.2,
                    2.9,
                    2.9,
                    3.1,
                    3,
                    2.7,
                    2.2,
                    2.5,
                    3.2,
                    2.8,
                    2.5,
                    2.8,
                    2.9,
                    3,
                    2.8,
                    3,
                    2.9,
                    2.6,
                    2.4,
                    2.4,
                    2.7,
                    2.7,
                    3,
                    3.4,
                    3.1,
                    2.3,
                    3,
                    2.5,
                    2.6,
                    3,
                    2.6,
                    2.3,
                    2.7,
                    3,
                    2.9,
                    2.9,
                    2.5,
                    2.8,
                ],
                [
                    'setosa',
                    0.2,
                    0.2,
                    0.2,
                    0.2,
                    0.2,
                    0.4,
                    0.3,
                    0.2,
                    0.2,
                    0.1,
                    0.2,
                    0.2,
                    0.1,
                    0.1,
                    0.2,
                    0.4,
                    0.4,
                    0.3,
                    0.3,
                    0.3,
                    0.2,
                    0.4,
                    0.2,
                    0.5,
                    0.2,
                    0.2,
                    0.4,
                    0.2,
                    0.2,
                    0.2,
                    0.2,
                    0.4,
                    0.1,
                    0.2,
                    0.2,
                    0.2,
                    0.2,
                    0.1,
                    0.2,
                    0.2,
                    0.3,
                    0.3,
                    0.2,
                    0.6,
                    0.4,
                    0.3,
                    0.2,
                    0.2,
                    0.2,
                    0.2,
                ],
                [
                    'versicolor',
                    1.4,
                    1.5,
                    1.5,
                    1.3,
                    1.5,
                    1.3,
                    1.6,
                    1,
                    1.3,
                    1.4,
                    1,
                    1.5,
                    1,
                    1.4,
                    1.3,
                    1.4,
                    1.5,
                    1,
                    1.5,
                    1.1,
                    1.8,
                    1.3,
                    1.5,
                    1.2,
                    1.3,
                    1.4,
                    1.4,
                    1.7,
                    1.5,
                    1,
                    1.1,
                    1,
                    1.2,
                    1.6,
                    1.5,
                    1.6,
                    1.5,
                    1.3,
                    1.3,
                    1.3,
                    1.2,
                    1.4,
                    1.2,
                    1,
                    1.3,
                    1.2,
                    1.3,
                    1.3,
                    1.1,
                    1.3,
                ],
            ],
            colors: {
                setosa_x: themeColors.accent,
                versicolor_x: themeColors.primary,
                setosa: themeColors.orange,
                versicolor: themeColors.purple,
                virginica_x: themeColors.info,
                virginica: themeColors.success,
            },
            type: scatter(),
        },
        axis: {
            x: {
                tick: {
                    fit: false,
                },
            },
            y: {},
        },
        size: {
            height: 280,
        },
        padding: {
            bottom: 20,
        },
        title: {
            text: 'Scatter Plot',
            position: 'left',
            padding: {
                bottom: 20,
                right: 20,
                top: 0,
                left: 20,
            },
        },
        legend: {
            position: 'inset',
        },
    });
    const onReady = (billboard) => {
        setTimeout(() => {
            billboard.load({
                xs: {
                    virginica: 'virginica_x',
                },
                columns: [
                    [
                        'virginica_x',
                        3.3,
                        2.7,
                        3.0,
                        2.9,
                        3.0,
                        3.0,
                        2.5,
                        2.9,
                        2.5,
                        3.6,
                        3.2,
                        2.7,
                        3.0,
                        2.5,
                        2.8,
                        3.2,
                        3.0,
                        3.8,
                        2.6,
                        2.2,
                        3.2,
                        2.8,
                        2.8,
                        2.7,
                        3.3,
                        3.2,
                        2.8,
                        3.0,
                        2.8,
                        3.0,
                        2.8,
                        3.8,
                        2.8,
                        2.8,
                        2.6,
                        3.0,
                        3.4,
                        3.1,
                        3.0,
                        3.1,
                        3.1,
                        3.1,
                        2.7,
                        3.2,
                        3.3,
                        3.0,
                        2.5,
                        3.0,
                        3.4,
                        3.0,
                    ],
                    [
                        'virginica',
                        2.5,
                        1.9,
                        2.1,
                        1.8,
                        2.2,
                        2.1,
                        1.7,
                        1.8,
                        1.8,
                        2.5,
                        2.0,
                        1.9,
                        2.1,
                        2.0,
                        2.4,
                        2.3,
                        1.8,
                        2.2,
                        2.3,
                        1.5,
                        2.3,
                        2.0,
                        2.0,
                        1.8,
                        2.1,
                        1.8,
                        1.8,
                        1.8,
                        2.1,
                        1.6,
                        1.9,
                        2.0,
                        2.2,
                        1.5,
                        1.4,
                        2.3,
                        2.4,
                        1.8,
                        1.8,
                        2.1,
                        2.4,
                        2.3,
                        1.9,
                        2.3,
                        2.5,
                        2.3,
                        1.9,
                        2.0,
                        2.3,
                        1.8,
                    ],
                ],
            });
        }, 1000);
        setTimeout(() => {
            billboard.unload({
                ids: 'setosa',
            });
        }, 2000);
        setTimeout(() => {
            billboard.load({
                columns: [
                    [
                        'virginica',
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.4,
                        0.3,
                        0.2,
                        0.2,
                        0.1,
                        0.2,
                        0.2,
                        0.1,
                        0.1,
                        0.2,
                        0.4,
                        0.4,
                        0.3,
                        0.3,
                        0.3,
                        0.2,
                        0.4,
                        0.2,
                        0.5,
                        0.2,
                        0.2,
                        0.4,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.4,
                        0.1,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.1,
                        0.2,
                        0.2,
                        0.3,
                        0.3,
                        0.2,
                        0.6,
                        0.4,
                        0.3,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                    ],
                ],
            });
        }, 3000);
    };
    return {
        options,
        onReady,
    };
}
//# sourceMappingURL=scatterSimple.js.map