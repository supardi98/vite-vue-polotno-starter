import {jsxs as $j4U0J$jsxs, jsx as $j4U0J$jsx} from "react/jsx-runtime";
import $j4U0J$react from "react";
import $j4U0J$reactdomclient from "react-dom/client";
import {PolotnoContainer as $j4U0J$PolotnoContainer, SidePanelWrap as $j4U0J$SidePanelWrap, WorkspaceWrap as $j4U0J$WorkspaceWrap} from "polotno";
import {Toolbar as $j4U0J$Toolbar} from "polotno/toolbar/toolbar";
import {PagesTimeline as $j4U0J$PagesTimeline} from "polotno/pages-timeline";
import {ZoomButtons as $j4U0J$ZoomButtons} from "polotno/toolbar/zoom-buttons";
import {DEFAULT_SECTIONS as $j4U0J$DEFAULT_SECTIONS, SidePanel as $j4U0J$SidePanel, SectionTab as $j4U0J$SectionTab} from "polotno/side-panel";
import {Workspace as $j4U0J$Workspace} from "polotno/canvas/workspace";
import {createStore as $j4U0J$createStore} from "polotno/model/store";
import {observer as $j4U0J$observer} from "mobx-react-lite";
import {svgToURL as $j4U0J$svgToURL} from "polotno/utils/svg";
import $j4U0J$meronexiconsaiAiFillPieChart from "@meronex/icons/ai/AiFillPieChart";
import {HTMLSelect as $j4U0J$HTMLSelect, InputGroup as $j4U0J$InputGroup, Button as $j4U0J$Button} from "@blueprintjs/core";
import {Chart as $j4U0J$Chart} from "frappe-charts";


















async function $665b0374e26ba8cc$export$6f51bedc4efb925e({ data: data, type: type }) {
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.style.width = "400px";
    const chart = new (0, $j4U0J$Chart)(div, {
        animate: 0,
        data: {
            labels: data[0].map((_, index)=>index + 1),
            datasets: data.map((values)=>({
                    name: "Some Data",
                    values: values
                }))
        },
        type: type,
        height: 300,
        colors: [
            "purple",
            "#ffa3ef",
            "light-blue",
            "green",
            "red"
        ]
    });
    await new Promise((resolve)=>setTimeout(resolve, 1000));
    const svgNode = div.querySelector("svg");
    svgNode.setAttribute("viewBox", "0 0 400 300");
    svgNode.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const legend = svgNode.querySelector(".chart-legend");
    if (legend) legend.parentElement.removeChild(legend);
    const str = svgNode.outerHTML;
    document.body.removeChild(div);
    return $j4U0J$svgToURL(str);
}
const $665b0374e26ba8cc$export$ab371b76a07f7f14 = {
    name: "charts",
    Tab: (props)=>/*#__PURE__*/ (0, $j4U0J$jsx)((0, $j4U0J$SectionTab), {
            name: "Charts",
            ...props,
            children: /*#__PURE__*/ (0, $j4U0J$jsx)((0, $j4U0J$meronexiconsaiAiFillPieChart), {})
        }),
    // we need observer to update component automatically on any store changes
    Panel: (0, $j4U0J$observer)(({ store: store })=>{
        const [val, setVal] = (0, $j4U0J$react).useState([
            "25,40,10"
        ]);
        const [type, setType] = (0, $j4U0J$react).useState("pie");
        const el = store.selectedElements[0];
        const isChart = el?.name === "chart";
        // if selection is changed we need to update input value
        (0, $j4U0J$react).useEffect(()=>{
            if (el?.custom?.value) {
                setVal(el?.custom?.value);
                setType(el?.custom?.type);
            }
        }, [
            isChart,
            el
        ]);
        // // update image src when we change input data
        (0, $j4U0J$react).useEffect(()=>{
            if (isChart) $665b0374e26ba8cc$export$6f51bedc4efb925e({
                data: val.map((e)=>e.split(",")),
                type: type
            }).then((src)=>{
                el.set({
                    src: src,
                    custom: {
                        value: val,
                        type: type
                    }
                });
            });
        }, [
            el,
            val,
            type,
            isChart
        ]);
        return /*#__PURE__*/ (0, $j4U0J$jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, $j4U0J$jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: "4px",
                        paddingBottom: "7px"
                    },
                    children: [
                        /*#__PURE__*/ (0, $j4U0J$jsx)("div", {
                            style: {
                                lineHeight: "23px"
                            },
                            children: "Char type:"
                        }),
                        /*#__PURE__*/ (0, $j4U0J$jsxs)((0, $j4U0J$HTMLSelect), {
                            style: {
                                width: "100px"
                            },
                            value: type,
                            onChange: (e)=>{
                                setType(e.target.value);
                            },
                            children: [
                                /*#__PURE__*/ (0, $j4U0J$jsx)("option", {
                                    children: "pie"
                                }),
                                /*#__PURE__*/ (0, $j4U0J$jsx)("option", {
                                    children: "bar"
                                }),
                                /*#__PURE__*/ (0, $j4U0J$jsx)("option", {
                                    children: "line"
                                }),
                                /*#__PURE__*/ (0, $j4U0J$jsx)("option", {
                                    children: "percentage"
                                })
                            ]
                        })
                    ]
                }),
                val.map((row, index)=>/*#__PURE__*/ (0, $j4U0J$jsxs)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            paddingTop: "5px"
                        },
                        children: [
                            /*#__PURE__*/ (0, $j4U0J$jsx)((0, $j4U0J$InputGroup), {
                                onChange: (e)=>{
                                    const copy = val.slice();
                                    copy[index] = e.target.value;
                                    setVal(copy);
                                },
                                placeholder: "Type qr code content",
                                value: row,
                                style: {
                                    width: "100%"
                                }
                            }),
                            /*#__PURE__*/ (0, $j4U0J$jsx)((0, $j4U0J$Button), {
                                disabled: val.length === 1,
                                onClick: ()=>{
                                    let copy = val.slice();
                                    copy.splice(index, 1);
                                    setVal(copy);
                                },
                                children: "Remove row"
                            })
                        ]
                    })),
                /*#__PURE__*/ (0, $j4U0J$jsx)((0, $j4U0J$Button), {
                    style: {
                        marginTop: "5px"
                    },
                    onClick: ()=>{
                        const lastLine = val[val.length - 1];
                        const newLine = lastLine.split(",").map((_)=>Math.round(Math.random() * 100)).join(",");
                        setVal(val.concat([
                            newLine
                        ]));
                    },
                    children: "Add row"
                }),
                /*#__PURE__*/ (0, $j4U0J$jsx)((0, $j4U0J$Button), {
                    style: {
                        display: isChart ? "none" : ""
                    },
                    fill: true,
                    onClick: async ()=>{
                        const src = await $665b0374e26ba8cc$export$6f51bedc4efb925e({
                            data: val.map((e)=>e.split(",")),
                            type: type
                        });
                        store.activePage.addElement({
                            type: "svg",
                            name: "chart",
                            x: 50,
                            y: 50,
                            width: 400,
                            height: 300,
                            src: src,
                            custom: {
                                value: val
                            }
                        });
                    },
                    children: "Add new chart"
                })
            ]
        });
    })
};



const $96449b9a37abcd77$var$store = (0, $j4U0J$createStore)({
    key: "nFA5H9elEytDyPyvKL7T",
    // you can hide back-link on a paid license
    // but it will be good if you can keep it for Polotno project support
    showCredit: true
});
// add to global namespace for debugging
window.store = $96449b9a37abcd77$var$store;
// add page and element instantly
$96449b9a37abcd77$var$store.addPage();
// add sample data
// const val = 'https://polotno.com/';
(0, $665b0374e26ba8cc$export$6f51bedc4efb925e)({
    data: [
        [
            25,
            40,
            10
        ]
    ],
    type: "pie"
}).then((src)=>{
    $96449b9a37abcd77$var$store.activePage.addElement({
        type: "svg",
        name: "chart",
        x: $96449b9a37abcd77$var$store.width / 2 - 150,
        y: $96449b9a37abcd77$var$store.height / 2 - 150,
        width: 400,
        height: 300,
        src: src,
        custom: {
            data: [
                25,
                40
            ]
        }
    });
});
// we will have just two sections
const $96449b9a37abcd77$var$sections = [
    (0, $665b0374e26ba8cc$export$ab371b76a07f7f14),
    ...(0, $j4U0J$DEFAULT_SECTIONS)
];
const $96449b9a37abcd77$var$page = $96449b9a37abcd77$var$store.addPage();
const $96449b9a37abcd77$export$86fbec116b87613f = ({ store: store })=>{
    return /*#__PURE__*/ (0, $j4U0J$jsxs)((0, $j4U0J$PolotnoContainer), {
        style: {
            width: "100%",
            height: "100%"
        },
        children: [
            /*#__PURE__*/ (0, $j4U0J$jsx)((0, $j4U0J$SidePanelWrap), {
                children: /*#__PURE__*/ (0, $j4U0J$jsx)((0, $j4U0J$SidePanel), {
                    store: store,
                    sections: $96449b9a37abcd77$var$sections,
                    defaultSection: "charts"
                })
            }),
            /*#__PURE__*/ (0, $j4U0J$jsxs)((0, $j4U0J$WorkspaceWrap), {
                children: [
                    /*#__PURE__*/ (0, $j4U0J$jsx)((0, $j4U0J$Toolbar), {
                        store: store
                    }),
                    /*#__PURE__*/ (0, $j4U0J$jsx)((0, $j4U0J$Workspace), {
                        store: store
                    }),
                    /*#__PURE__*/ (0, $j4U0J$jsx)((0, $j4U0J$ZoomButtons), {
                        store: store
                    }),
                    /*#__PURE__*/ (0, $j4U0J$jsx)((0, $j4U0J$PagesTimeline), {
                        store: store
                    })
                ]
            })
        ]
    });
};
const $96449b9a37abcd77$export$eb02d1ee0d3cac30 = ({ container: container })=>{
    const root = (0, $j4U0J$reactdomclient).createRoot(container);
    root.render(/*#__PURE__*/ (0, $j4U0J$jsx)($96449b9a37abcd77$export$86fbec116b87613f, {
        store: $96449b9a37abcd77$var$store
    }));
};
// make API global for simple start in development
window.createEditor = $96449b9a37abcd77$export$eb02d1ee0d3cac30;


export {$96449b9a37abcd77$export$86fbec116b87613f as App, $96449b9a37abcd77$export$eb02d1ee0d3cac30 as createEditor};
