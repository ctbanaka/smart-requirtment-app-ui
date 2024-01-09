import * as offerspending_service from "../offerspending.service"
// @ponicode
describe("offerspending_service.OfferspendingService.getOffersPendingList", () => {
    let inst: any

    beforeEach(() => {
        inst = new offerspending_service.OfferspendingService()
    })

    test("0", () => {
        let result: any = inst.getOffersPendingList()
        expect(result).toMatchSnapshot()
    })
})
