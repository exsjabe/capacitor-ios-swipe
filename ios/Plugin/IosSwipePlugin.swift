import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(IosSwipePlugin)
public class IosSwipePlugin: CAPPlugin {

    override public func load() {
        bridge?.webView?.allowsBackForwardNavigationGestures = true;
    }

    private let implementation = IosSwipe()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
}
