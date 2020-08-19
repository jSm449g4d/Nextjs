import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { AppWidgetHead, AppWidgetFoot } from '../components/widget'

import '../stylesheets/styles.sass'


export default () => {
    const router = useRouter()
    useEffect(() => {
        if ("pages" in router.query == false) {
            import("../pages/homepage").then((module) => {
                ReactDOM.unmountComponentAtNode(document.getElementById("appMain"));
                ReactDOM.render(<module.AppMain />, document.getElementById("appMain"));
                ReactDOM.unmountComponentAtNode(document.getElementById("widget_titlelogo"));
                ReactDOM.render(<module.TitleLogo />, document.getElementById("widget_titlelogo"));
            })
        }
        else {
            import("../pages/" + router.query["pages"]).then((module) => {
                ReactDOM.unmountComponentAtNode(document.getElementById("appMain"));
                ReactDOM.render(<module.AppMain />, document.getElementById("appMain"));
                ReactDOM.unmountComponentAtNode(document.getElementById("widget_titlelogo"));
                ReactDOM.render(<module.TitleLogo />, document.getElementById("widget_titlelogo"));
            })
        }
        ReactDOM.unmountComponentAtNode(document.getElementById("widgetHead"));
        ReactDOM.render(<AppWidgetHead />, document.getElementById("widgetHead"));
        ReactDOM.unmountComponentAtNode(document.getElementById("widgetFoot"));
        ReactDOM.render(<AppWidgetFoot />, document.getElementById("widgetFoot"));
    }, [])

    return (
        <div>
            <Head>
                <title>APP_TSX</title>
                <link href="/static/node_modules/@fortawesome/fontawesome-free/css/all.css" rel="stylesheet" />
                <link href="/static/node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
                <script src="/static/node_modules/jquery/dist/jquery.min.js"></script>
                <script src="/static/node_modules/popper.js/dist/umd/popper.min.js"></script>
                <script src="/static/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
            </Head>
            <div id="widgetHead">AppWidgetHead loading...</div>
            <div id="appMain">appMain loading...</div>
            <div id="widgetFoot">AppWidgetFoot loading...</div>
        </div>
    )
};



export const AppM = () => {
    const [tmpText, setTmpText] = useState("")
    const [tmpSwitch, setTmpSwitch] = useState("")

    return (
        <div className="m-1 d-flex flex-column text-center" style={{ backgroundColor: "beige", border: "3px double silver" }}>
            <h4>商品詳細: {tmpText}</h4>
            <textarea className="form-control m-1" rows={5} value={tmpText}
                onChange={(evt: any) => { setTmpText(evt.target.value) }}></textarea>
            <div className="d-flex">
                <button className="flex-fill btn btn-success btn-lg btn-push m-1" type="button"
                    onClick={() => { }}>
                    <i className="fas fa-paper-plane mr-1" style={{ pointerEvents: "none" }}></i>変更する
                </button>
                <button className="flex-fill btn btn-secondary btn-lg btn-push m-1" type="button"
                    onClick={() => { setTmpText(""); setTmpSwitch(""); }}>
                    <i className="fas fa-times mr-1" style={{ pointerEvents: "none" }}></i>変更中止
                </button>
            </div>
        </div>
    );
}
