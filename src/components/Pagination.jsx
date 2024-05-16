const Pagination = () => {
  return (
    <selection className="flex justify-center xl:justify-end mt-[100px] xl:mt-[200px] mb-[60px]">
      <div class="flex">
        <a href="#" class="flex items-center px-4 py-2 pagination">
          &#8249; Sebelumnya
        </a>
        <a href="#" class="px-4 py-2 pagination-aktif">
          1
        </a>
        <a href="#" class="px-4 py-2 pagination">
          2
        </a>
        <a href="#" class="px-4 py-2 pagination">
          3
        </a>
        <a href="#" class="px-4 py-2 pagination">
          4
        </a>
        <a href="#" class="px-4 py-2 pagination">
          ...
        </a>
        <a href="#" class="px-4 py-2 pagination">
          10
        </a>
        <a href="#" class="px-4 py-2 pagination-next">
          Selanjutnya &#8250;
        </a>
      </div>
    </selection>
  );
};

export default Pagination;
