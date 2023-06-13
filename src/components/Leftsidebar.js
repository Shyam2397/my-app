export default function LeftSideBar() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <button className="btn my-5 w-full border-none hover:bg-gray-700 bg-transparent">
              Dashborad
            </button>
          </li>
          <li>
            <button className="btn my-5 w-full border-none hover:bg-gray-700 bg-transparent">
              profile
            </button>
          </li>
          <li>
            <button className="btn my-5 w-full border-none hover:bg-gray-700 bg-transparent">
              studentlist
            </button>
          </li>
          <li>
            <button className="btn my-5 w-full border-none hover:bg-gray-700 bg-transparent">
              interview notes
            </button>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <button className="btn border-none absolute inset-x-0 bottom-5 hover:bg-gray-700 bg-transparent">
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}
