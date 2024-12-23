export default function Footer(){
    return(
      <footer className="bg-gray-800 p-6 mt-10 text-center">
        <p className="text-gray-500">
        &copy; {new Date().getFullYear()} IMDb Clone. All rights reserved.
        </p>
      </footer>
    );
}