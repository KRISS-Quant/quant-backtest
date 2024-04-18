{
  'targets' : [
    {
      "target_name" : "addon",
      "sources" : [ 'market_data.cpp' ],
      # "toolsets": ["v141"],
      "include_dirs" : [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
