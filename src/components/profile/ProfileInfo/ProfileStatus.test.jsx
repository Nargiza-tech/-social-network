import ProfileStatus from "../ProfileStatus";
import {create} from "react-test-renderer"
describe("ProfileStatus Component", () => {
    test("status from props in the state", () => {
        const component = create(<ProfileStatus status={"it-nargiza.com"}/>)
        const instance  = component.getInstance()
            expect(instance.state.status).toBe("it-nargiza.com");
            })


    test("after creation input should be displayed", () => {
        const component = create(<ProfileStatus status={"it-camasutra.com"}/>)
        const root  = component.root

        expect(() => {
            const input = root.findByType("input")
        }).toThrow();
    })


    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status={"it-camasutra.com"}/>)
        const root  = component.root
       const span = root.findByType("span")
         expect(span.children[0]).toBe("it-camasutra.com");
    })


    test("input should be displayed in editMode", () => {
        const component = create(<ProfileStatus status={"it-camasutra.com"}/>)
        const root  = component.root
        const span = root.findByType("span")
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("it-camasutra.com");
    })


    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="it-camasutra.com" updateStatus={mockCallback}/>)
        const instance  = component.getInstance()
        instance.deActivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    })


});



