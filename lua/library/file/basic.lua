function Unpack (t, i)
  i = i or 1
  if t [i] ~= nil then 
    return t[i], Unpack(t, i + 1)
  end
end

function RenameF (arg)
  return os.rename(arg.old, arg.new)
end

function LoadF(filename) 
  local file = assert(loadfile(filename))
  return file()
end

function Writef (fmt, ...)
  return io.write(string.format(fmt, Unpack(arg)))
end