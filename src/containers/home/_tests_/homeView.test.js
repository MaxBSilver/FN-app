import { mapStateToProps, mapDispatchToProps, HomeViews } from "../HomeView";

describe("HomeView", () => {
  describe("HomeView Component", () => {});
  describe("mapStateToProps", () => {
    it("should return an object with the news array", () => {
      const mockState = {
        news: [{ title: "New Skins" }, { title: "New Items" }]
      };
      const expected = {
        news: [{ title: "New Skins" }, { title: "New Items" }]
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
    it("should return an boolean", () => {
      const mockState = {
        isLoading: false
      };
      const expected = {
        isLoading: false
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
    it("should return an error message", () => {
      const mockState = {
        error: "Has Errored!"
      };
      const expected = {
        error: "Has Errored!"
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});
